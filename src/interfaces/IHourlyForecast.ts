import { IHourlyForecastList } from "./IHourlyForecastList";

export interface IHourlyForecast {
  cod: number;
  message: string;
  cnt: number;
  list: IHourlyForecastList[];
}
