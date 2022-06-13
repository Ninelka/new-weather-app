import React from "react";
import { HourlyForecastItemProps } from "../interfaces";

const HourlyForecastItem: React.FC<HourlyForecastItemProps> = (props) => {
  const { date, icon, temperature } = props;

  return (
    <div className="flex flex-col">
      <div>{date}</div>
      <div>{icon}</div>
      <div>{temperature.toFixed()}&deg;</div>
    </div>
  );
};

export default HourlyForecastItem;
