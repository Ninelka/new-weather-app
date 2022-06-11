import { ICurrentWeather } from "../interfaces";
import React from "react";

const OneDayWeather: React.FC<ICurrentWeather> = ({ ...props }) => {
  const { name, main, sys, weather, wind, clouds } = props;

  return (
    <>
      <div>{`${name}, ${sys.country}`}</div>
      <div>{main.temp.toFixed()}</div>
      <div>{new Date(sys.sunrise).toTimeString()}</div>
      <div>{new Date(sys.sunset).toTimeString()}</div>
      <div>{weather[0].main}</div>
      <div>{weather[0].description}</div>
      <div>{weather[0].icon}</div>
      <div>{wind.speed.toFixed()} m/s</div>
      <div>{clouds.all}</div>
    </>
  );
};

export default OneDayWeather;
