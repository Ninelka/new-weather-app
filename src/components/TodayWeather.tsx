import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";

import { IQueryVariable } from "../interfaces";
import { GET_TODAY_WEATHER } from "../queries/queries";
import { useWeatherStore } from "../store/useWeatherStore";
import CurrentWeatherCommon from "./CurrentWeatherCommon";

const TodayWeather: React.FC<IQueryVariable> = ({ city }) => {
  const { loading, error, data } = useQuery(GET_TODAY_WEATHER, {
    variables: { city },
  });

  const [setLoading, setNotLoading, setCurrentWeather] = useWeatherStore(
    (state) => [state.setLoading, state.setNotLoading, state.setCurrentWeather]
  );

  useEffect(() => {
    if (loading) {
      setLoading();
    }

    if (data) {
      setCurrentWeather(data.currentWeather);
      setNotLoading();
    }
  }, [loading, data]);

  if (error) return <p>ERROR: {error}</p>;

  if (!data) {
    return <p>Nothing to show...</p>;
  }

  return (
    <div className="flex flex-1 justify-center bg-house bg-contain bg-bottom bg-no-repeat pt-24">
      <CurrentWeatherCommon />
    </div>
  );
};
export default TodayWeather;
