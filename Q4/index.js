const input = document.querySelector(".OddEven");
const btnCheck = document.querySelector("#check");
const result = document.querySelector("#output");

function checkOddEven() {
  // console.log("hi");
  let checkNumber = +input.value;
  // console.log(typeof(checkNumber));
  if (checkNumber % 2 == 0) {
    // console.log("even");
    result.innerText = "The entered number is even..!";
  } else {
    result.innerText = "The entered number is odd..!";
  }
}

btnCheck.addEventListener("click", checkOddEven);
