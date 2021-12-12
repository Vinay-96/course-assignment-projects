// var myName = "vinay";
// var myName = "vikram";
// console.log(myName)

// let myName = "vinay";
// let myName = "vikram";
// console.log(myName)

// const myName = "vinay";
// const myName = "vikram";
// console.log(myName)

// document.writeln('vinay')
// document.write('vinay')

function innerTextFn() {
  var x = document.getElementById("test");
  alert(x.innerText);
}

function innerHTMLFn() {
  var x = document.getElementById("test");
  alert(x.innerHTML);
}

// Template literals
let myName = "vinay";
let surName = "Rao";
console.log("my name is" + " " + myName, "my surname is" + " " + surName);

console.log(`my name is ${myName} and my surname is ${surName}`);
