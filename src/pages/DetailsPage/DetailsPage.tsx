import React from "react";
import { useParams } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../../services/charactersApi";
import useToggleFavoriteStatus from "../../hooks/useToggleFavoriteStatus";
import HeartIcon from "../../components/HeartIcon/HeartIcon";
import ComicCard from "../../components/ComicCard/ComicCard";
import { Transformation } from "../../types";
import "./DetailsPage.scss";

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: character } = useGetCharacterByIdQuery(id!);
  const { isFavorite, toggleFavoriteStatus } = useToggleFavoriteStatus();

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div className="details-page">
      <div className="info-wrapper">
        <img src={character.image} alt={character.name} />

        <div className="description-wrapper">
          <div className="title-wrapper">
            <h1>{character.name}</h1>
            <HeartIcon
              isLarge
              isFavorite={isFavorite(character.id)}
              onClick={() => toggleFavoriteStatus(character.id)}
            />
          </div>
          <p>{character.description}</p>
        </div>
      </div>

      <div className="comics-wrapper">
        <h2>Comics</h2>
        <div className="comics-container">
          {character.transformations.map((transformation: Transformation) => (
            <ComicCard
              name={transformation.name}
              image={transformation.image}
              ki={transformation.ki}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
