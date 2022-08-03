import { useLazyQuery } from "@apollo/client";
import { Scrollbars } from "rc-scrollbars";
import React, { Dispatch, SetStateAction, useEffect } from "react";

import { IHourlyForecastList, IQueryVariable } from "../interfaces";
import { GET_WEEK_FORECAST } from "../queries/queries";
import HourlyForecastItem from "./HourlyForecastItem";
import QueryResult from "./QueryResult";

interface IWeekWeather extends IQueryVariable {
  isDataLoaded: Dispatch<SetStateAction<boolean>>;
}

const WeekWeather: React.FC<IWeekWeather> = ({ city, isDataLoaded }) => {
  const [getWeekWeather, { loading, error, data }] =
    useLazyQuery(GET_WEEK_FORECAST);

  const weekWeather = data?.forecast;

  useEffect(() => {
    if (city) {
      getWeekWeather({ variables: { city } }).then(() =>
        isDataLoaded(Boolean(weekWeather))
      );
    }
  }, [city, weekWeather]);

  return (
    <>
      <QueryResult error={error} loading={loading} data={data}>
        <Scrollbars autoHeight>
          <div className="flex gap-5 pb-4">
            {weekWeather &&
              weekWeather.list.slice(0, 8).map((day: IHourlyForecastList) => {
                return (
                  <HourlyForecastItem
                    key={day.dt.toString()}
                    date={day.dt_txt}
                    icon={day.weather[0].icon}
                    temperature={day.main.temp}
                    pop={day.pop}
                  />
                );
              })}
          </div>
        </Scrollbars>
      </QueryResult>
    </>
  );
};

export default WeekWeather;
