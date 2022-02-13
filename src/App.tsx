import React from 'react';
import './App.css';
import TodayWeather from "./components/TodayWeather";
import WeekWeather from "./components/WeekWeather";

function App() {
  return (
    <>
        <TodayWeather/>
        <WeekWeather/>
    </>
  );
}

export default App;
