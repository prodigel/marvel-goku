import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useToggleFavoriteStatus from "../../hooks/useToggleFavoriteStatus";
import useGetCharacters from "../../hooks/useGetCharacters";
import SmallCard from "../../components/SmallCard/SmallCard";
import Filter from "../../components/Filter/Filter";
import { RootState } from "../../store/store";

import "./HomePage.scss";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const filter = useSelector((state: RootState) => state.app.filter);
  const { isFavorite, toggleFavoriteStatus } = useToggleFavoriteStatus();

  const { isLoading, showFavorites, characters } = useGetCharacters(filter);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="home-page">
      {showFavorites && <h1>Favorites</h1>}
      <Filter />

      <div className="card-container">
        {characters?.map((character: any) => {
          return (
            <SmallCard
              onClick={() => navigate(`/details/${character.id}`)}
              key={character.id}
              title={character.name}
              imageUrl={character.image}
              isFavorite={isFavorite(character.id)}
              onFavoriteClick={(e) => {
                e.stopPropagation();
                toggleFavoriteStatus(character.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
