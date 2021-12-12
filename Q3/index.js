const input = document.querySelector("#inputNumber");
const btnCheck = document.querySelector("#check");
const result = document.querySelector("#output");

function checkSign() {
  //   console.log("hi");
  let checkNumber = +input.value;
  //    console.log( typeof checkNumber);

  if (checkNumber < 0) {
    // console.log("you have entered a negative number");
    result.innerText = "You have entered a Negative(-) number";
  } else if (checkNumber == 0) {
    // console.log("Please enter valid number");
    result.innerText = "Please enter a valid number";
  } else {
    // console.log("you have entered a positive number");
    result.innerText = "You have entered a Positive(+) number";
  }
}

btnCheck.addEventListener("click", checkSign);
