import React from "react";
import TodayWeather from "./components/TodayWeather";
import WeekWeather from "./components/WeekWeather";
import Layout from "./components/Layout";
import Input from "./components/Input";
import TodayWeatherCities from "./components/TodayWeatherCities";

function App() {
  const [city, setCity] = React.useState("");
  const [showCurrentWeather, setshowCurrentWeather] = React.useState(false);
  const [showForecast, setShowForecast] = React.useState(false);
  const popularCities = ["Montreal", "Toronto", "Tokyo", "Moscow", "Berlin"];

  // const getTodayWeather = () => {
  //   setshowCurrentWeather(true);
  // };
  //
  // const getForecast = () => {
  //   setShowForecast(true);
  // };

  const getWeather = () => {
    setshowCurrentWeather(true);
    setShowForecast(true);
  };

  return (
    <>
      <Layout>
        <div className="shadow-2 col-start-1 m-8 flex flex-col justify-between gap-5 rounded-[44px] border border-dashed border-[#7B61FF] bg-main bg-cover bg-bottom bg-no-repeat p-5">
          {showCurrentWeather && (
            <div className="flex flex-1 justify-center bg-house bg-contain bg-bottom bg-no-repeat pt-24">
              <TodayWeather city={city} />
            </div>
          )}
          {showForecast && <WeekWeather city={city} />}
        </div>
        <div className="shadow-2 col-start-2 m-8 rounded-[44px] border border-dashed border-[#7B61FF] p-5">
          <div className="flex justify-between gap-6">
            <Input
              label="Enter your city:"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              type="submit"
              onClick={getWeather}
              className="bold-subheadline shadow-1 mt-7 flex max-h-8 items-center justify-center whitespace-nowrap rounded-[30px] p-4 text-dark-primary"
            >
              Get weather
            </button>
          </div>
        </div>
        <div className="shadow-2 col-start-3 m-8 flex flex-col gap-5 overflow-y-auto rounded-[44px] border border-dashed border-[#7B61FF] p-5">
          {showCurrentWeather &&
            popularCities.map((popularCity) => {
              return (
                <TodayWeatherCities key={popularCity} city={popularCity} />
              );
            })}
        </div>
      </Layout>
    </>
  );
}

export default App;
