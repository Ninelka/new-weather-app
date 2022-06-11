import React from "react";
import { useQuery } from "@apollo/client";
import { GET_WEEK_FORECAST } from "../queries/queries";
import QueryResult from "./QueryResult";
import { IQueryVariable, IWeekForecast } from "../interfaces";

const WeekWeather: React.FC<IQueryVariable> = ({ city }) => {
  const { loading, error, data } = useQuery(GET_WEEK_FORECAST, {
    variables: { city },
  });

  return (
    <>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.forecast?.map((item: IWeekForecast) => (
          <p>{item}</p>
        ))}
      </QueryResult>
    </>
  );
};

export default WeekWeather;
