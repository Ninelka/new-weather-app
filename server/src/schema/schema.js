const { gql } = require('apollo-server');

const typeDefs = gql`
  type City {
    name: String!
    country: String
    timezone: Int
    sunrise: Int
    sunset: Int
  }

  type Wind {
    speed: Float
    deg: Float
  }

  type Clouds {
    all: Int
  }

  type Sys {
    pod: String
  }

  type Main {
    temp: Float
    feels_like: Float
    temp_min: Float
    temp_max: Float
    pressure: Float
    humidity: Int
    temp_f: Float
    temp_c: Float
  }

  type WeatherListItem {
    main: String
    description: String
    icon: String
  }

  type List {
    dt: Int
    dt_txt: String
    main: Main
    weather: [WeatherListItem]!
    clouds: Clouds
    wind: Wind
    sys: Sys
  }

  type Forecast {
    cod: String
    message: Int
    cnt: Int
    city: City
    list: [List]!
  }

  type CurrentWeather {
    dt: Int
    dt_txt: String
    city: City
    weather: WeatherListItem
    main: Main
    wind: Wind
    clouds: Clouds
  }

  type Query {
    forecast(city: String!): [Forecast!]!
    currentWeather(city: String!): [CurrentWeather!]!
  }
`;

module.exports = typeDefs;
