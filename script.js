let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = async (cityInput) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const fullURL = `${URL}?q=${cityInput}&appid=${API_KEY}&units=imperial`;

  try {
    const response = await fetch(fullURL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};

const searchCity = async () => {
  const cityInput = document.getElementById("city-input").value;
 
  const data = await getWeatherData(cityInput);
  showWeatherData(data);
};

const showWeatherData = (weatherData) => {
  const cityNameEl = document.getElementById("city-name");
  const weatherTypeEl = document.getElementById("weather-type");
  const tempEl = document.getElementById("temp");
  const minTempEl = document.getElementById("min-temp");
  const maxTempEl = document.getElementById("max-temp");

  cityNameEl.textContent = weatherData.name;
  tempEl.textContent = weatherData.main.temp;
  weatherTypeEl.textContent = weatherData.weather[0].main;
  minTempEl.textContent = weatherData.main.temp_min;
  maxTempEl.textContent = weatherData.main.temp_max;
};
