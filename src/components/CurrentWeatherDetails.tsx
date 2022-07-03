import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import React from "react";

import { CurrentWeatherDetailsItemProps } from "../interfaces";
import { useWeatherStore } from "../store/useWeatherStore";
import CurrentWeatherDetailsItem from "./CurrentWeatherDetailsItem";
import { Icon } from "./Icon";
import Skeleton from "./Skeleton";

dayjs.extend(localizedFormat);

const CurrentWeatherDetails: React.FC = () => {
  const [isLoading, currentWeather] = useWeatherStore((state) => [
    state.isLoading,
    state.currentWeather,
  ]);

  const sunrise = () => {
    return dayjs.unix(currentWeather.sys.sunrise).format("LT");
  };

  const sunset = () => {
    return dayjs.unix(currentWeather.sys.sunset).format("LT");
  };

  const humidity = () => {
    return currentWeather.main.humidity + "%";
  };

  const feelsLike = () => {
    return currentWeather.main.feels_like.toFixed() + "\xB0";
  };

  const pressure = () => {
    return currentWeather.main.pressure + " hPa";
  };

  const visibility = () => {
    const convertToKm = currentWeather.visibility / 1000;

    return String(convertToKm.toFixed() + " km");
  };

  const wind = () => {
    return currentWeather.wind.speed.toFixed() + " m/s";
  };

  const compassElement = () => {
    return (
      <div className="absolute bottom-2 left-1/2 h-32 w-32 -translate-x-1/2 bg-compass bg-cover bg-no-repeat">
        <Icon
          className="flex h-full w-full origin-center items-center justify-center"
          style={{ transform: `rotate(${currentWeather.wind.deg}deg)` }}
          path={`assets/images/compass-arrow.svg`}
        />
        <div className="shadow-1 bold-callout absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-solid-2 p-2 text-dark-primary">
          {wind()}
        </div>
      </div>
    );
  };

  const detailsDataList: CurrentWeatherDetailsItemProps[] = [
    {
      title: "Sunrise",
      value: sunrise(),
      description: "Sunset: " + sunset(),
      icon: "sunrise",
    },
    {
      title: "Wind",
      icon: "wind",
      className: "relative",
      children: compassElement(),
    },
    {
      title: "Feels like",
      value: feelsLike(),
      icon: "thermometer",
    },
    {
      title: "Humidity",
      value: humidity(),
      icon: "droplet",
    },
    {
      title: "Visibility",
      value: visibility(),
      icon: "eye",
    },
    {
      title: "Pressure",
      value: pressure(),
      icon: "download-cloud",
    },
  ];

  if (isLoading || !currentWeather) {
    return <Skeleton />;
  }

  return (
    <>
      <div className="flex flex-wrap gap-x-4 gap-y-3">
        {detailsDataList.map((dataItem) => {
          return (
            <CurrentWeatherDetailsItem
              key={dataItem.title}
              title={dataItem.title}
              value={dataItem.value}
              description={dataItem.description}
              icon={dataItem.icon}
              className={dataItem.className}
            >
              {dataItem.children}
            </CurrentWeatherDetailsItem>
          );
        })}
      </div>
    </>
  );
};

export default CurrentWeatherDetails;
