export interface IHourlyForecastList {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
  pop: number;
}
