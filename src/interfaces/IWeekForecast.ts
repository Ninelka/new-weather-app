import { IWeekForecastList } from "./IWeekForecastList";

export interface IWeekForecast {
  cod: number;
  message: string;
  cnt: number;
  list: IWeekForecastList[];
}
