let btnCheck = document.querySelector("#checkYear");
let inputYear = document.querySelector(".yearInput");
let result = document.querySelector("#output");

function leapCheck() {
  const leapYear = +inputYear.value;

  //   console.log(typeof leapYear);
  //   console.log(leapYear);
  //   console.log("hi");

  if (leapYear == 0) {
    result.innerText = "Please enter the valid year";
  } else if (
    (leapYear % 4 == 0 && leapYear % 100 != 0) ||
    leapYear % 400 == 0
  ) {
    result.innerText = "YES..! it is leap year "; //console.log HERE
  } else {
    result.innerText = "Nahh..! it's just 365 days";
  }
}

btnCheck.addEventListener("click", leapCheck);
