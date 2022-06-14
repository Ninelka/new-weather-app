import React from "react";
import { HourlyForecastItemProps } from "../interfaces";
import { Icon } from "./Icon";
import dayjs from "dayjs";

const HourlyForecastItem: React.FC<HourlyForecastItemProps> = (props) => {
  const { date, icon, temperature } = props;

  const formatDate = dayjs(date).format("h A");

  return (
    <div className="flex flex-col items-center justify-between min-w-[60px] gap-3 py-4 px-2 bg-solid-1 rounded-[30px]">
      <span className="bold-subheadline text-dark-primary">{formatDate}</span>
      <Icon width={32} height={32} path={`assets/images/${icon}.svg`} />
      <div className="regular-title-3 text-dark-primary">
        {temperature.toFixed()}&deg;
      </div>
    </div>
  );
};

export default HourlyForecastItem;
