
const api = {
  key: "e2f9be8e410b9912a0a3493c1eb046e5"
}


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
   console.log("Geolocalização nao suportada");
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  console.log(lat, lon);
  apiCall(lat, lon);
  geolocationApi(lat, lon);
  stateApi(lat, lon)
}

function apiCall(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=16c4f885babaae630606eb81ec51b106`
  )
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((response) => {displayWeather(response)})
}

function displayWeather(data){

  // console.log(data)

  let temp = data.main.temp; 
  let icon = data.weather[0].icon;
  
  // console.log(temp, icon);

  const temperature = document.querySelector("#temp");
  temperature.innerHTML = temp.toFixed(0) + "º";
  
  document.querySelector("#icon").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

// GEOLOCALIZAÇÃO //

function geolocationApi(lat,lon){
  fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=16c4f885babaae630606eb81ec51b106`
  )
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((response) => {convertCoord(response)})
}

function convertCoord(geo){
  let cityName = geo[0].name;
  // console.log(geo);
  // console.log(cityName);

  displayCityName(cityName);
}

function displayCityName(city){
  const name = document.querySelector("#city");
  name.innerHTML = city + " - "
}

// ESTADO //

function stateApi(lat, lon){
  fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
  )
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((response) => {convertState(response)})
}

function convertState(state){
  console.log(state);

  let stateName = state.address["ISO3166-2-lvl4"];

  displayStateName(stateName);
}

function displayStateName(stateName){
  const state = document.querySelector("#state");

  state.innerHTML = " " + stateName.substr(3, 4)
}

getLocation();
