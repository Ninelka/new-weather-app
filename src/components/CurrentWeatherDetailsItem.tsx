import classNames from "classnames";
import React from "react";

import { CurrentWeatherDetailsItemProps } from "../interfaces";
import { SpriteIcon } from "./SpriteIcon";

const CurrentWeatherDetailsItem: React.FC<CurrentWeatherDetailsItemProps> = ({
  title,
  value,
  description,
  className,
  icon,
  children,
}) => {
  return (
    <div
      className={classNames(
        "bg-radial flex h-40 w-40 flex-col justify-between rounded-[22px] border border-solid border-dark-primary border-opacity-30 p-4",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <label className="bold-body flex items-center gap-1 text-dark-secondary">
          {icon && (
            <SpriteIcon icon={icon} className="h-5 w-5 fill-dark-secondary" />
          )}
          <span>{title.toUpperCase()}</span>
        </label>
        {value && (
          <h2 className="regular-title-1 text-dark-primary">{value}</h2>
        )}
        {children}
      </div>
      {description && (
        <span className="regular-subheadline text-dark-primary">
          {description}
        </span>
      )}
    </div>
  );
};

export default CurrentWeatherDetailsItem;
