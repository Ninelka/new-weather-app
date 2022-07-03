import React from "react";

import { stringToCapitalize } from "../lib/stringToCapitalize";
import { useWeatherStore } from "../store/useWeatherStore";
import Skeleton from "./Skeleton";

const CurrentWeatherCommon: React.FC = () => {
  const [isLoading, currentWeather] = useWeatherStore((state) => [
    state.isLoading,
    state.currentWeather,
  ]);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="regular-large-title text-dark-primary">
        {currentWeather.name}
      </div>
      <h1 className="text-title-large-1 font-thin text-dark-primary">
        {currentWeather.main.temp.toFixed()}&deg;
      </h1>
      <div className="flex flex-col items-center">
        <div className="regular-title-3 text-dark-secondary">
          {stringToCapitalize(currentWeather.weather[0].description)}
        </div>
        <span className="regular-title-3 text-dark-primary">
          H:{currentWeather.main.temp_min.toFixed()}&deg; L:
          {currentWeather.main.temp_max.toFixed()}
          &deg;
        </span>
      </div>
    </div>
  );
};

export default CurrentWeatherCommon;
