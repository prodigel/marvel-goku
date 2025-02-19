import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";
import { resetFilter, setFilter } from "../store/appSlice";
import useDebouncedAction from "./useDebouncedAction";
import useGetCharacters from "./useGetCharacters";

const useCharacterFilter = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleReset = () => {
    setInputValue("");
    return dispatch(resetFilter());
  };

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const showFavorites = useSelector((state: RootState) => state.app.favorites);
  const filter = useSelector((state: RootState) => state.app.filter);

  const [inputValue, setInputValue] = useState(filter);
  const { characters } = useGetCharacters(filter);

  const filteredCharacters = showFavorites
    ? characters?.filter((character: any) => favorites.includes(character.id))
    : characters;

  useDebouncedAction(inputValue, () => dispatch(setFilter(inputValue)));

  return {
    handleInputChange,
    handleReset,
    inputValue,
    setInputValue,
    filter,
    resultsCount: filteredCharacters?.length ?? 0,
  };
};

export default useCharacterFilter;
