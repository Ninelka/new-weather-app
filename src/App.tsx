import { useLazyQuery } from "@apollo/client";
import { Scrollbars } from "rc-scrollbars";
import React from "react";

import CurrentWeatherDetails from "./components/CurrentWeatherDetails";
import Input from "./components/Input";
import Layout from "./components/Layout";
import TodayWeather from "./components/TodayWeather";
import TodayWeatherCities from "./components/TodayWeatherCities";
import WeekWeather from "./components/WeekWeather";
import { GET_TODAY_WEATHER } from "./queries/queries";

function App() {
  const [city, setCity] = React.useState<string>("");
  const [debouncedValue, setDebouncedValue] = React.useState<string>("");
  const [weekWeatherLoaded, setWeekWeatherLoaded] = React.useState(false);

  const popularCities = ["New York", "Toronto", "Tokyo", "Moscow", "Berlin"];

  const [getCity, { loading, error, data }] = useLazyQuery(GET_TODAY_WEATHER);

  React.useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(city);
    }, 1000);

    return () => {
      clearInterval(debounce);
    };
  }, [city]);

  React.useEffect(() => {
    if (data?.currentWeather && weekWeatherLoaded) {
      setCity("");
    }
  }, [data?.currentWeather, weekWeatherLoaded]);

  return (
    <>
      <Layout>
        <div className="shadow-2 col-start-1 m-8 flex flex-col justify-between gap-5 rounded-[44px] border border-dashed border-[#7B61FF] bg-main bg-cover bg-bottom bg-no-repeat p-5">
          <TodayWeather error={error} loading={loading} data={data} />
          {data && (
            <WeekWeather
              city={debouncedValue}
              isDataLoaded={setWeekWeatherLoaded}
            />
          )}
        </div>
        <div className="shadow-2 col-start-2 m-8 flex flex-col gap-y-5 rounded-[44px] border border-dashed border-[#7B61FF] p-5">
          <div className="flex justify-between gap-6">
            <Input
              placeholder="Search for a city or airport"
              value={city}
              icon="search"
              iconClassName="fill-dark-secondary absolute top-1/2 -translate-y-1/2 left-2"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <button
              disabled={debouncedValue.length === 0}
              type="submit"
              onClick={() => getCity({ variables: { city } })}
              className="bold-subheadline shadow-1 flex max-h-8 items-center justify-center whitespace-nowrap rounded-[30px] p-4 text-dark-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              Get weather
            </button>
          </div>
          <CurrentWeatherDetails error={error} loading={loading} data={data} />
        </div>
        <div className="shadow-2 col-start-3 m-8 overflow-y-auto rounded-[44px] border border-dashed border-[#7B61FF] p-5">
          <Scrollbars autoHide>
            <div className="flex h-full flex-col gap-5">
              {data &&
                popularCities.map((popularCity) => {
                  return (
                    <TodayWeatherCities key={popularCity} city={popularCity} />
                  );
                })}
            </div>
          </Scrollbars>
        </div>
      </Layout>
    </>
  );
}

export default App;
