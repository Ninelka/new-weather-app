import React from "react";
import { useQuery } from "@apollo/client";
import { GET_WEEK_FORECAST } from "../queries/queries";
import QueryResult from "./QueryResult";
import { IQueryVariable } from "../interfaces";
import HourlyForecastItem from "./HourlyForecastItem";

const WeekWeather: React.FC<IQueryVariable> = ({ city }) => {
  const { loading, error, data } = useQuery(GET_WEEK_FORECAST, {
    variables: { city },
  });

  const weekWeather = data?.forecast;

  console.log(weekWeather);

  return (
    <>
      <QueryResult error={error} loading={loading} data={data}>
        <div className="flex gap-[20px]">
          {weekWeather &&
            weekWeather.list.map((day: any) => {
              return (
                <HourlyForecastItem
                  key={day.dt.toString()}
                  date={day.dt_txt}
                  icon={day.weather[0].icon}
                  temperature={day.main.temp}
                />
              );
            })}
        </div>
      </QueryResult>
    </>
  );
};

export default WeekWeather;
