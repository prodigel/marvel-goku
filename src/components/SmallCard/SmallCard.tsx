import React from "react";
import HeartIcon from "../HeartIcon/HeartIcon";
import "./SmallCard.scss";

type CardProps = {
  title: string;
  imageUrl: string;
  isFavorite: boolean;
  onClick: (e: any) => void;
  onFavoriteClick: (e: any) => void;
};

const SmallCard: React.FC<CardProps> = ({
  title,
  imageUrl,
  isFavorite,
  onFavoriteClick,
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image-wrapper">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="card-footer">
        <span>{title}</span>
        <HeartIcon
          isFavorite={isFavorite}
          onClick={(e) => onFavoriteClick(e)}
        />
      </div>
    </div>
  );
};

export default SmallCard;
