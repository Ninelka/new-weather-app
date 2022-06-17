import { WeatherWidgetProps } from "../interfaces";
import React from "react";
import { Icon } from "./Icon";

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  city,
  icon,
  temp,
  temp_min,
  temp_max,
  weather_description,
}) => {
  return (
    <div className="h-auto w-[22rem] bg-widget bg-contain bg-bottom bg-no-repeat p-5">
      <div className="flex items-end justify-between">
        <h1 className="text-title-super text-dark-primary">{temp}&deg;</h1>
        <Icon
          className="shrink-0"
          width={160}
          height={160}
          path={`assets/images/${icon}.svg`}
        />
      </div>
      <div className="regular-footnote mt-6 text-dark-secondary">
        <span>
          H:{temp_max}&deg; L:{temp_min}&deg;
        </span>
      </div>
      <div className="flex items-center justify-between text-dark-primary">
        <div className="regular-body">{city}</div>
        <div className="regular-footnote">{weather_description}</div>
      </div>
    </div>
  );
};

export default WeatherWidget;
