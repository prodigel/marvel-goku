import React from "react";
import { Transformation } from "../../types";
import "./ComicCard.scss";

const ComicCard: React.FC<Partial<Transformation>> = ({ name, image, ki }) => {
  return (
    <div className="comic-card">
      <div className="image-wrapper">
        <img src={image} alt={name} />
      </div>
      <p>Transformation name: {name}</p>
      <p>KI: {ki}</p>
    </div>
  );
};

export default ComicCard;
