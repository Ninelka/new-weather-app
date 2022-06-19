import React from "react";
import { WeatherWidgetProps } from "../interfaces";
import { stringToCapitalize } from "../lib/stringToCapitalize";

const CurrentWeatherCommon: React.FC<WeatherWidgetProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="regular-large-title text-dark-primary">{data.name}</div>
      <h1 className="text-title-large-1 font-thin text-dark-primary">
        {data.main.temp.toFixed()}&deg;
      </h1>
      <div className="flex flex-col items-center">
        <div className="regular-title-3 text-dark-secondary">
          {stringToCapitalize(data.weather[0].description)}
        </div>
        <span className="regular-title-3 text-dark-primary">
          H:{data.main.temp_min.toFixed()}&deg; L:{data.main.temp_max.toFixed()}
          &deg;
        </span>
      </div>
    </div>
  );
};

export default CurrentWeatherCommon;
