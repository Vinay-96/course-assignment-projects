const inputChar = document.querySelector(".charInput");
const btnCheck = document.querySelector("#checkChar");
const result = document.querySelector("#output");

function checkChar() {
  // console.log("hi");
  let inputValue = inputChar.value;
  // console.log(inputValue)

  if (
    (inputValue >= "a" && inputValue <= "z") ||
    (inputValue >= "A" && inputValue <= "Z")
  ) {
    // console.log("alphabet");
    result.innerText = "yeah...! it is Alphabet";
  } else {
    // console.log("not alphabet");
    result.innerText = "No...! it is not an Alphabet";
  }
}

btnCheck.addEventListener("click", checkChar);
