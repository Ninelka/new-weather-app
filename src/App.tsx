import React from "react";
import TodayWeather from "./components/TodayWeather";
import WeekWeather from "./components/WeekWeather";
import Layout from "./components/Layout";
import Input from "./components/Input";

function App() {
  const [city, setCity] = React.useState("");
  const [showCurrentWeather, setshowCurrentWeather] = React.useState(false);
  const [showForecast, setShowForecast] = React.useState(false);

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
        <div className="flex items-end justify-between gap-6">
          <Input
            label="Enter your city:"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            onClick={getWeather}
            className="bold-subheadline shadow-1 flex max-h-8 items-center justify-center whitespace-nowrap rounded-[30px] p-4 text-dark-primary"
          >
            Get weather
          </button>
        </div>
        {showCurrentWeather && <TodayWeather city={city} />}
        {showForecast && <WeekWeather city={city} />}
      </Layout>
    </>
  );
}

export default App;
