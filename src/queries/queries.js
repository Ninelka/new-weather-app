import { gql } from "@apollo/client";

const GET_WEEK_FORECAST = gql`
  query getForecast($city: String!) {
    forecast(city: $city) {
      cod
      message
      cnt
      list {
        dt
        dt_txt
        main {
          temp
        }
        weather {
          main
          description
          icon
        }
        pop
      }
    }
  }
`;

const GET_TODAY_WEATHER = gql`
  query getCurrentWeather($city: String!) {
    currentWeather(city: $city) {
      id
      name
      sys {
        country
        sunrise
        sunset
      }
      weather {
        main
        description
        icon
      }
      main {
        temp
        feels_like
        temp_min
        temp_max
        pressure
        humidity
      }
      wind {
        speed
        deg
      }
      clouds {
        all
      }
      visibility
    }
  }
`;

export { GET_TODAY_WEATHER, GET_WEEK_FORECAST };
