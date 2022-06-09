export interface IWeekForecastList {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  };
}
