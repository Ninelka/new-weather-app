import React from "react";
import classNames from "classnames";

interface SpriteIconProps {
  icon: string;
  className?: string;
}

export const SpriteIcon: React.FC<SpriteIconProps> = ({ icon, className }) => {
  const containerClassName = classNames("h-full w-full", className);

  return (
    <svg viewBox="0 0 24 24" className={containerClassName}>
      <use xlinkHref={`assets/sprite.svg#${icon}`}></use>
    </svg>
  );
};
