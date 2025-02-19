import React from "react";
import { useNavigate } from "react-router-dom";

import useFavoritesSwitcher from "../../hooks/useShowFavoritesSwitcher";
import { ReactComponent as MarvelLogo } from "../../assets/images/svg/marvel.svg";
import HeartIcon from "../HeartIcon/HeartIcon";
import "./Header.scss";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { totalFavorites, toggleFavoritesView } = useFavoritesSwitcher();

  return (
    <div
      className="Header"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <MarvelLogo onClick={() => navigate("/")} />

      <span
        className="Header Header__Favorites"
        style={{ display: "flex", alignItems: "center" }}
      >
        <HeartIcon isLarge isFavorite onClick={toggleFavoritesView} />
        <span>{totalFavorites}</span>
      </span>
    </div>
  );
};

export default Header;
