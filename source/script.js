setInterval(function () {
  let firstCity = document.querySelector("#city-one");
  let firstCityDate = firstCity.querySelector(".date");
  let firstCityTime = firstCity.querySelector(".time");
  let firstCityLocal = moment().tz("America/Denver");
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
