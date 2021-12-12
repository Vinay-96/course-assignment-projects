const marksInput = document.querySelector(".inputMarks");
const btnCheck = document.querySelector("#check");
const result = document.querySelector("#output");

function findGrade() {
  // console.log("hi");
  let marks = +marksInput.value;
  // console.log(typeof marks);
  switch (true) {
    case marks >= 0 && marks <= 25:
      //  console.log(marks)
      result.innerText = `Student has secured ${marks}% and obtained F grade`;
      break;

    case marks >= 25 && marks <= 45:
      result.innerText = `Student has secured ${marks}% and obtained E grade`;
      break;

    case marks >= 45 && marks <= 50:
      result.innerText = `Student has secured ${marks}% and obtained D grade`;
      break;

    case marks >= 50 && marks <= 60:
      result.innerText = `Student has secured ${marks}% and obtained C grade`;
      break;

    case marks >= 60 && marks <= 80:
      result.innerText = `Student has secured ${marks}% and obtained B grade`;
      break;

    case marks > 80 && marks <= 100:
      result.innerText = `Student has secured ${marks}% and obtained A grade`;
      break;

    case marks > 100:
      result.innerText = `Enter marks form 1 to 100`;
      break;

    default:
      result.innerText = "Please enter the valid marks";
      break;
  }
}

btnCheck.addEventListener("click", findGrade);
