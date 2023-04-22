export default async function fetchCurrentWeather(city) {
  const API_KEY = "d30ca9fa34cc529c0e28ae05b8562aac";
  const CURRENT_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await fetch(CURRENT_WEATHER_API);
  const weatherData = await response.json();

  return weatherData;
}