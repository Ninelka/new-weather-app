import { ICurrentWeatherBase } from "./ICurrentWeatherBase";

export interface WeatherWidgetProps {
  data: {
    name: string;
    sys: {
      country: string;
    };
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    weather: ICurrentWeatherBase[];
  };
}
