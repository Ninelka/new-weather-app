import { useQuery } from "@apollo/client";
import { Scrollbars } from "rc-scrollbars";
import React from "react";

import { IHourlyForecastList, IQueryVariable } from "../interfaces";
import { GET_WEEK_FORECAST } from "../queries/queries";
import HourlyForecastItem from "./HourlyForecastItem";
import QueryResult from "./QueryResult";

const WeekWeather: React.FC<IQueryVariable> = ({ city }) => {
  const { loading, error, data } = useQuery(GET_WEEK_FORECAST, {
    variables: { city },
  });

  const weekWeather = data?.forecast;

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
