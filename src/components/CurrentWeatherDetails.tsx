import React from "react";
import QueryResult from "./QueryResult";
import { useQuery } from "@apollo/client";
import { GET_TODAY_WEATHER } from "../queries/queries";
import { IQueryVariable } from "../interfaces";
import CurrentWeatherDetailsItem from "./CurrentWeatherDetailsItem";
import { Icon } from "./Icon";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

const CurrentWeatherDetails: React.FC<IQueryVariable> = ({ city }) => {
  const { loading, error, data } = useQuery(GET_TODAY_WEATHER, {
    variables: { city },
  });

  const currentWeather = data?.currentWeather;

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

  return (
    <>
      <QueryResult error={error} loading={loading} data={data}>
        {currentWeather && (
          <div className="flex flex-wrap gap-x-4 gap-y-3">
            <CurrentWeatherDetailsItem
              title="Sunrise"
              value={dayjs.unix(currentWeather.sys.sunrise).format("LT")}
              description={
                "Sunset: " + dayjs.unix(currentWeather.sys.sunset).format("LT")
              }
              icon="sunrise"
            />
            <CurrentWeatherDetailsItem
              title="Wind"
              className="relative"
              icon="wind"
            >
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
            </CurrentWeatherDetailsItem>
            <CurrentWeatherDetailsItem
              title="Feels like"
              value={feelsLike()}
              icon="thermometer"
            />
            <CurrentWeatherDetailsItem
              title="Humidity"
              value={humidity()}
              icon="droplet"
            />
            <CurrentWeatherDetailsItem
              title="Visibility"
              value={visibility()}
              icon="eye"
            />
            <CurrentWeatherDetailsItem
              title="Pressure"
              value={pressure()}
              icon="download-cloud"
            />
          </div>
        )}
      </QueryResult>
    </>
  );
};

export default CurrentWeatherDetails;
