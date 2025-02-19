import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleFavorites } from "../store/appSlice";

const useFavoritesSwitcher = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const toggleFavoritesView = () => {
    dispatch(toggleFavorites());
  };
  return { toggleFavoritesView, totalFavorites: favorites.length };
};

export default useFavoritesSwitcher;
