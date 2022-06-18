import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TODAY_WEATHER } from "../queries/queries";
import QueryResult from "./QueryResult";
import { IQueryVariable } from "../interfaces";
import CurrentWeatherCommon from "./CurrentWeatherCommon";

const TodayWeather: React.FC<IQueryVariable> = ({ city }) => {
  const { loading, error, data } = useQuery(GET_TODAY_WEATHER, {
    variables: { city },
  });

  const currentWeather = data?.currentWeather;

  return (
    <>
      <QueryResult error={error} loading={loading} data={data}>
        <CurrentWeatherCommon data={currentWeather} />
      </QueryResult>
    </>
  );
};
export default TodayWeather;
