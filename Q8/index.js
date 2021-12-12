const inputMonth = document.querySelector(".enterMonth");
const btnPrint = document.querySelector("#printMonth");
const result = document.querySelector("#output");

function printMonth() {
  // console.log("hi");
  let month = +inputMonth.value;

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      //   console.log("31 days");
      result.innerText = "31 days";
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      //   console.log("30 Days.");
      result.innerText = "30 days";
      break;
    case 2:
      //   console.log("28/29 Days.");
      result.innerText = "28/29 days";
      break;
    default:
      //   console.log("Invalid Month.");
      result.innerText = "Invalid Month";
      break;
  }
}

btnPrint.addEventListener("click", printMonth);
