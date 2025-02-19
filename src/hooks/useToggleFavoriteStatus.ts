import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";
import { RootState } from "../store/store";

const useToggleFavoriteStatus = () => {
  const isFavorite = (characterId: string): boolean => {
    return favorites.includes(characterId);
  }

  const toggleFavoriteStatus = (characterId: string): void => {
    const isFavorite = favorites.includes(characterId);

    if (isFavorite) {
      dispatch(removeFavorite(characterId));
    } else {
      dispatch(addFavorite(characterId));
    }
  };

  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  return { isFavorite, toggleFavoriteStatus };
};

export default useToggleFavoriteStatus;
