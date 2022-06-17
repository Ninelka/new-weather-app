import React from "react";
import { HourlyForecastItemProps } from "../interfaces";
import { Icon } from "./Icon";
import dayjs from "dayjs";
import classNames from "classnames";

const HourlyForecastItem: React.FC<HourlyForecastItemProps> = (props) => {
  const { date, icon, pop, temperature, isActive } = props;

  const formatDate = dayjs(date).format("h A");
  const percentOfPrecipitation = () => {
    if (pop && pop > 0) {
      return Number(pop * 100).toFixed() + "%";
    }
  };

  const containerClassName = classNames(
    "flex w-max min-w-[60px] flex-col items-center justify-between gap-3 rounded-[30px] py-4 px-2 bg-solid-1 shadow-1",
    {
      "border border-solid border-dark-primary border-opacity-20": isActive,
      "bg-opacity-20": !isActive,
    }
  );

  return (
    <div className={containerClassName}>
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
