import React from "react";
import "./App.css";
import TodayWeather from "./components/TodayWeather";
import WeekWeather from "./components/WeekWeather";

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
      <div>
        <label>Enter your city:</label>
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <button type="submit" onClick={getWeather}>
          Get weather
        </button>
      </div>
      {showCurrentWeather && <TodayWeather city={city} />}
      {showForecast && <WeekWeather city={city} />}
    </>
  );
}

export default App;
