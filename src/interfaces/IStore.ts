import { ICurrentWeather } from "./ICurrentWeather";
import { IHourlyForecast } from "./IHourlyForecast";

export interface IStore {
  currentWeather: ICurrentWeather | Record<string, never>;
  hourlyForecast: IHourlyForecast | Record<string, never>;
  isLoading: boolean;
  setLoading: () => void;
  setNotLoading: () => void;
  setCurrentWeather: (data: ICurrentWeather) => void;
  setHourlyForecast: (data: IHourlyForecast) => void;
}
