import { useQuery } from "@apollo/client";
import React from "react";

import { IQueryVariable } from "../interfaces";
import { GET_TODAY_WEATHER } from "../queries/queries";
import CurrentWeatherCommon from "./CurrentWeatherCommon";
import QueryResult from "./QueryResult";

const TodayWeather: React.FC<IQueryVariable> = ({ city }) => {
  const { loading, error, data } = useQuery(GET_TODAY_WEATHER, {
    variables: { city },
  });

  const currentWeather = data?.currentWeather;

  return (
    <>
      <QueryResult error={error} loading={loading} data={data}>
        <div className="flex flex-1 justify-center bg-house bg-contain bg-bottom bg-no-repeat pt-24">
          <CurrentWeatherCommon data={currentWeather} />
        </div>
      </QueryResult>
    </>
  );
};
export default TodayWeather;
