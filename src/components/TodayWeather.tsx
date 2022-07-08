import React from "react";

import CurrentWeatherCommon from "./CurrentWeatherCommon";
import QueryResult from "./QueryResult";

const TodayWeather = ({ ...props }) => {
  const { error, loading, data } = props;

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
