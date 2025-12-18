setInterval(function () {
  let firstCity = document.querySelector("#city-one");
  let firstCityDate = firstCity.querySelector(".date");
  let firstCityTime = firstCity.querySelector(".time");
  let firstCityLocal = moment().tz("America/New_York");
  firstCityDate.innerHTML = firstCityLocal.format("dddd MMMM Do, YYYY");
  firstCityTime.innerHTML = firstCityLocal.format("HH:mm:ss");
}, 1000);

setInterval(function () {
  let secondCity = document.querySelector("#city-two");
  let secondCityDate = secondCity.querySelector(".date");
  let secondCityTime = secondCity.querySelector(".time");
  let secondCityLocal = moment().tz("Asia/Bangkok");
  secondCityDate.innerHTML = secondCityLocal.format("dddd MMMM Do, YYYY");
  secondCityTime.innerHTML = secondCityLocal.format("HH:mm:ss");
}, 1000);

setInterval(function () {
  let thirdCity = document.querySelector("#city-three");
  let thirdCityDate = thirdCity.querySelector(".date");
  let thirdCityTime = thirdCity.querySelector(".time");
  let thirdCityLocal = moment().tz("Canada/Pacific");
  thirdCityDate.innerHTML = thirdCityLocal.format("dddd MMMM Do, YYYY");
  thirdCityTime.innerHTML = thirdCityLocal.format("HH:mm:ss");
}, 1000);

setInterval(function () {
  let fourthCity = document.querySelector("#city-four");
  let fourthCityDate = fourthCity.querySelector(".date");
  let fourthCityTime = fourthCity.querySelector(".time");
  let fourthCityLocal = moment().tz("Etc/GMT+1");
  fourthCityDate.innerHTML = fourthCityLocal.format("dddd MMMM Do, YYYY");
  fourthCityTime.innerHTML = fourthCityLocal.format("HH:mm:ss");
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let chooseCity = document.querySelector("#cities");
  chooseCity.innerHTML = `
      <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>`;
}

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", updateCity);
