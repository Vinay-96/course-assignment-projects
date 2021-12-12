const inputSide = document.querySelectorAll(".sideInput");
const btnCheck = document.querySelector("#sideCheck");
const result = document.querySelector("#output");

function checkTriangle() {
  let side1 = +inputSide[0].value;
  let side2 = +inputSide[1].value;
  let side3 = +inputSide[2].value;

  if (side1 == side2 && side2 == side3) {
    result.innerText = "Triangle is Equilateral";
  } else if (side1 == side2 || side2 == side3 || side3 == side1) {
    result.innerText = "Triangle is Isosceles";
  } else {
    result.innerText = "Triangle is Scalene";
  }
}

btnCheck.addEventListener("click", checkTriangle);
