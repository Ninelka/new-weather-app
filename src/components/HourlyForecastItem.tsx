import React from "react";
import { HourlyForecastItemProps } from "../interfaces";
import { Icon } from "./Icon";
import dayjs from "dayjs";

const HourlyForecastItem: React.FC<HourlyForecastItemProps> = (props) => {
  const { date, icon, temperature } = props;

  const formatDate = dayjs(date).format("h A");

  return (
    <div className="bg-['rgba(72, 49, 157, .2)'] shadow-1 flex min-w-[60px] flex-col items-center justify-between gap-3 rounded-[30px] py-4 px-2">
      <span className="bold-subheadline text-dark-primary">{formatDate}</span>
      <Icon width={32} height={32} path={`assets/images/${icon}.svg`} />
      <div className="regular-title-3 text-dark-primary">
        {temperature.toFixed()}&deg;
      </div>
    </div>
  );
};

export default HourlyForecastItem;
