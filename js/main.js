const elTemp = document.querySelector(".js-temp").content;
const elCard = document.querySelector(".card");
const elForm = document.querySelector(".js-form");
const elInput = document.querySelector(".js-input");
const elBtn = document.querySelector(".js-btn");

// let city = "Termez";
// console.log(city);
// elForm.addEventListener('submit', evt => {
//   evt.preventDefault()

//   city = elInput.value
// })

function cityRender(array, node) {
  elCard.innerHTML = "";
  let newTemp = elTemp.cloneNode(true);

  newTemp.querySelector(".cityName").textContent = array.name + ",";
  newTemp.querySelector(".cityCountry").textContent = array.sys.country;
  newTemp.querySelector(".cityImg").src = `http://openweathermap.org/img/wn/${
    array.weather[0].icon + ".png"
  }`;
  newTemp.querySelector(".cityFeels").textContent =
    "Feels like: " + Math.floor(array.main.feels_like - 270) + "°C";
  newTemp.querySelector(".cityTemp").textContent =
    Math.floor(array.main.temp - 270) + "°C";
  newTemp.querySelector(".cityMain").textContent = array.weather[0].main;
  node.appendChild(newTemp);
  // console.log(data.sys.country);
}

async function openWeather(city = "Termez") {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=659484d8de84c416bfdb018aceb7cab7`
  );
  let data = await response.json();

  cityRender(data, elCard);
}

openWeather();

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault()
  openWeather(elInput.value);

  elInput.value = ''
});
