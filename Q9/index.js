const inputAngel = document.querySelectorAll(".angleInput");
const btnCheck = document.querySelector("#isTriangle");
const result = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;

  // console.log(sumOfAngles);

  return sumOfAngles; //we have to use this so return
}

function isTriangle() {
  // console.log("hi");

  // const sumOfAngles = calculateSumOfAngles(45, 45, 90) //hardcode check

  //   console.log(typeof inputAngel[0].value, inputAngel[1].value, inputAngel[2].value);

  let sumOfAngel = calculateSumOfAngles(
    +inputAngel[0].value,
    +inputAngel[1].value,
    +inputAngel[2].value
  );

  //   console.log(sumOfAngel)

  if (sumOfAngel === 180) {
    // console.log("yes it is");

    result.innerText = "YES...! these angles form a valid triangle";
  } else {
    // console.log("no not it is");

    result.innerText = "NO....! these angles doesn't  form a valid triangle";
  }
}

btnCheck.addEventListener("click", isTriangle);
