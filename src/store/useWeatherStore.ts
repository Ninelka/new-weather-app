import create from "zustand";
import { devtools } from "zustand/middleware";

import { IStore } from "../interfaces";

export const useWeatherStore = create<IStore>()(
  devtools((set) => ({
    currentWeather: {},
    hourlyForecast: {},
    isLoading: false,
    setLoading: () => {
      set({ isLoading: true });
    },
    setNotLoading: () => {
      set({ isLoading: false });
    },
    setCurrentWeather: (data) => {
      set({ currentWeather: data });
    },
    setHourlyForecast: (data) => {
      set({ hourlyForecast: data });
    },
  }))
);
