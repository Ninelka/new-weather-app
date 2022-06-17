import React from "react";
import { CurrentWeatherDetailsItemProps } from "../interfaces";

const CurrentWeatherDetailsItem: React.FC<CurrentWeatherDetailsItemProps> = ({
  title,
  value,
  description,
}) => {
  return (
    <div className="bg-radial flex h-40 w-40 flex-col justify-between rounded-[22px] border border-solid border-dark-primary border-opacity-30 p-4">
      <div className="flex flex-col gap-2">
        <label className="bold-body text-dark-secondary">
          {title.toUpperCase()}
        </label>
        <h2 className="regular-title-1 text-dark-primary">{value}</h2>
      </div>
      <span className="regular-subheadline text-dark-primary">
        {description}
      </span>
    </div>
  );
};

export default CurrentWeatherDetailsItem;
