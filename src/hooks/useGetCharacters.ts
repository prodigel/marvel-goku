import { useSelector } from "react-redux";
import { useGetAllCharactersQuery } from "../services/charactersApi";
import { RootState } from "../store/store";

const useGetCharacters = (filter: string) => {
  const showFavorites = useSelector((state: RootState) => state.app.favorites);

  const { data, isLoading } = useGetAllCharactersQuery({
    name: filter !== "" ? filter : undefined,
  });

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const characters = showFavorites
    ? data?.filter((character: any) => favorites.includes(character.id))
    : data;

    return {isLoading, showFavorites, characters}
}

export default useGetCharacters