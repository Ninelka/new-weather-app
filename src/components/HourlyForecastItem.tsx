import React from "react";
import { HourlyForecastItemProps } from "../interfaces";
import { Icon } from "./Icon";

const HourlyForecastItem: React.FC<HourlyForecastItemProps> = (props) => {
  const { date, icon, temperature } = props;

  return (
    <div className="flex flex-col">
      <div>{date}</div>
      <Icon width={32} height={32} path={`assets/images/${icon}.svg`} />
      <div>{temperature.toFixed()}&deg;</div>
    </div>
  );
};

export default HourlyForecastItem;
