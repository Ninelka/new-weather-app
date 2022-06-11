import { ICurrentWeatherBase } from "./ICurrentWeatherBase";

export interface ICurrentWeather {
  id: number;
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  weather: ICurrentWeatherBase[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  clouds: {
    all: string;
  };
}
