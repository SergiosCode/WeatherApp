/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  //CODE GOES HERE
  const showWeatherPromise = fetch(FULL_URL);
  return showWeatherPromise.then((response) => {
    return response.json();
  });
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById("city-input").value;
  console.log(city);
  // CODE GOES HERE
  getWeatherData(city)
    .then((response) => {
      showWeatherData(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */

showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;

  document.querySelector(".store-city").addEventListener("click", () => {
    const cityData = {
      name: weatherData.name,
      weatherType: weatherData.weather[0].main,
      temp: weatherData.main.temp,
      minTemp: weatherData.main.temp_min,
      maxTemp: weatherData.main.temp_max,
    };

    localStorage.setItem(weatherData.name, JSON.stringify(cityData));

    document.querySelector(".button-search-history").innerHTML += `
    <button type="button" class='btn btn-lg btn-dark city-button ${weatherData.name}'>${weatherData.name}</button>`;
    document.querySelector(".city-button").addEventListener("click", () => {
      let key = document.querySelector(`.${cityData.name}`).value;
      let city = JSON.parse(localStorage.getItem(localStorage.key(key)));
      document.getElementById("city-name").innerText = city.name;
      document.getElementById("weather-type").innerText = city.weatherType;
      document.getElementById("temp").innerText = city.temp;
      document.getElementById("min-temp").innerText = city.minTemp;
      document.getElementById("max-temp").innerText = city.maxTemp;
      console.log(city);
    });
  });
};

document.querySelector(".clear-button").addEventListener("click", () => {
  localStorage.clear();
});
