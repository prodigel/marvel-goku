import React from "react";
import { ReactComponent as Heart } from "../../assets/images/svg/heart.svg";
import { ReactComponent as HeartRed } from "../../assets/images/svg/heart-red.svg";
import { ReactComponent as HeartHeavy } from "../../assets/images/svg/heart-heavy.svg";
import { ReactComponent as HeartHeavyRed } from "../../assets/images/svg/heart-heavy-red.svg";
import clsx from "clsx";
import "./HeartIcon.scss";

interface HeartIconProps {
  isHeavy?: boolean;
  isFavorite: boolean;
  isLarge?: boolean;
  onClick: (e: any) => void;
}

const HeartIcon: React.FC<HeartIconProps> = ({
  isHeavy = false,
  isFavorite = false,
  isLarge = false,
  onClick,
}) => {
  let IconComponent;

  if (isHeavy) {
    IconComponent = isFavorite ? HeartHeavyRed : HeartHeavy;
  } else {
    IconComponent = isFavorite ? HeartRed : Heart;
  }

  return (
    <div
      className={clsx("icon-wrapper", {
        "icon-wrapper--large": isLarge,
      })}
      onClick={onClick}
    >
      <IconComponent className="icon" />
    </div>
  );
};

export default HeartIcon;
