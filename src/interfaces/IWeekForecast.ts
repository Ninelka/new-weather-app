export interface IWeekForecast {
  cod: number;
  message: string;
  cnt: number;
  list: {
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
  };
}
