const alphaInput = document.querySelector(".alphaInput");
const btnCheck = document.querySelector("#check");
const result = document.querySelector("#output");

function checkAlpha() {
  // console.log("hi");

  let checkInput = alphaInput.value;
  //   console.log(checkInput);
  //   console.log(typeof checkInput);

  if (checkInput == "") {
    // console.log("Please enter a valid alphabet");
    result.innerText = "Please enter a valid alphabet";
  } else if (
    checkInput == "a" ||
    checkInput == "e" ||
    checkInput == "i" ||
    checkInput == "o" ||
    checkInput == "u"
  ) {
    // console.log("vowel");
    result.innerText = "it's Vowel";
  } else if (
    checkInput == "A" ||
    checkInput == "E" ||
    checkInput == "I" ||
    checkInput == "O" ||
    checkInput == "U"
  ) {
    // console.log("vowel");
    result.innerText = "it's Vowel";
  } else {
    // console.log("consonant");
    result.innerText = "it's Consonant";
  }
}

btnCheck.addEventListener("click", checkAlpha);
