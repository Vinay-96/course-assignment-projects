const convertTemp = document.querySelector(".temperature");
const btnCelsius = document.querySelector("#Celsius");
const btnFahrenheit = document.querySelector("#fahrenheit");
const result = document.querySelector("#output");

function toCelsius() {
  //   console.log("hi");
  let conCel = +convertTemp.value;
  //   console.log(conCel);
  let convertedCelsius = ((conCel - 32) * 5) / 9;
  //   console.log(convertedCelsius)
  result.innerText = `${conCel} in Fahrenheit is ${convertedCelsius} in Celsius`;
}

function toFahrenheit() {
  //   console.log("hi");
  let conFar = convertTemp.value;
  //   console.log(conFar);
  let convertedFahrenheit = (conFar * 9) / 5 + 32;
  //   console.log(convertedFahrenheit);
  result.innerText = `${conFar} in Celsius is ${convertedFahrenheit} in Fahrenheit`;
}

btnCelsius.addEventListener("click", toCelsius);
btnFahrenheit.addEventListener("click", toFahrenheit);
