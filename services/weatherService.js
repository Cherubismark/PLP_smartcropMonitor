const axios = require('axios');
require('dotenv').config();

const getWeather = async (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = getWeather;
