const { RESTDataSource } = require('apollo-datasource-rest');

class WeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.openweathermap.org/data/2.5/';
  }

  getForecast(city) {
    return this.get(`forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
  }

  getCurrentWeather(city) {
    return this.get(`weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
  }
}

module.exports = WeatherAPI;
