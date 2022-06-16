import React from "react";
import { HourlyForecastItemProps } from "../interfaces";
import { Icon } from "./Icon";
import dayjs from "dayjs";

const HourlyForecastItem: React.FC<HourlyForecastItemProps> = (props) => {
  const { date, icon, pop, temperature } = props;

  const formatDate = dayjs(date).format("h A");
  const percentOfPrecipitation = () => {
    if (pop && pop > 0) {
      return Number(pop * 100).toFixed() + "%";
    }
  };

  return (
    <div className="bg-['rgba(72, 49, 157, .2)'] shadow-1 flex min-w-[60px] flex-col items-center justify-between gap-3 rounded-[30px] py-4 px-2">
      <span className="bold-subheadline text-dark-primary">{formatDate}</span>
      <div className="flex flex-col items-center">
        <Icon
          className="shrink-0"
          width={32}
          height={32}
          path={`assets/images/${icon}.svg`}
        />
        <span className="bold-footnote h-[18px] text-accent">
          {percentOfPrecipitation()}
        </span>
      </div>
      <div className="regular-title-3 text-dark-primary">
        {temperature.toFixed()}&deg;
      </div>
    </div>
  );
};

export default HourlyForecastItem;
