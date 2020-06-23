
var time9am = document.querySelector("#am9text");
var button9am = document.querySelector("#am9Button");

var time10am = document.querySelector("#am10text");
var button10am = document.querySelector("#am10Button");

var time11am = document.querySelector("#am11text");
var button11am = document.querySelector("#am11Button");

var time12pm = document.querySelector("#pm12text");
var button12pm = document.querySelector("#pm12Button");

var time1pm = document.querySelector("#pm1text");
var button1pm = document.querySelector("#pm1Button");

var time2pm = document.querySelector("#pm2text");
var button2pm = document.querySelector("#pm2Button");

var time3pm = document.querySelector("#pm3text");
var button3pm = document.querySelector("#pm3Button");

var time4pm = document.querySelector("#pm4text");
var button4pm = document.querySelector("#pm4Button");

var time5pm = document.querySelector("#pm5text");
var button5pm = document.querySelector("#pm5Button");


button9am.addEventListener("click", function () {
  localStorage.setItem("textam9",document.getElementById("am9text").value);
  alert("The value you entered at 9am is: " + localStorage.getItem("textam9")+"  Saved Successafully!");;
});

button10am.addEventListener("click", function () {
  localStorage.setItem("textam10",document.getElementById("am10text").value);
  alert("The value you entered at 10 am is: " + localStorage.getItem("textam10")+"  Saved Successafully!");;
});

button11am.addEventListener("click", function () {
  localStorage.setItem("textam11",document.getElementById("am11text").value);
  alert("The value you entered at 11 am is: " + localStorage.getItem("textam11")+"  Saved Successafully!");;
});

button12pm.addEventListener("click", function () {
  localStorage.setItem("textpm12",document.getElementById("pm12text").value);
  alert("The value you entered at 12 pm is: " + localStorage.getItem("textpm12")+"  Saved Successafully!");;
});

button1pm.addEventListener("click", function () {
  localStorage.setItem("textpm1",document.getElementById("pm1text").value);
  alert("The value you entered at 1 pm is: " + localStorage.getItem("textpm1")+"  Saved Successafully!");;
});

button2pm.addEventListener("click", function () {
  localStorage.setItem("textpm2",document.getElementById("pm2text").value);
  alert("The value you entered at 2 pm is: " + localStorage.getItem("textpm2")+"  Saved Successafully!");;
});

button3pm.addEventListener("click", function () {
  localStorage.setItem("textpm3",document.getElementById("pm3text").value);
  alert("The value you entered at 3 pm is: " + localStorage.getItem("textpm3")+"  Saved Successafully!");;
});

button4pm.addEventListener("click", function () {
  localStorage.setItem("textpm4",document.getElementById("pm4text").value);
  alert("The value you entered at 4 pm is: " + localStorage.getItem("textpm4")+"  Saved Successafully!");;
});

button5pm.addEventListener("click", function () {
  localStorage.setItem("textpm5",document.getElementById("pm5text").value);
  alert("The value you entered at 5 pm is: " + localStorage.getItem("textpm5")+"  Saved Successafully!");;
});


// time maintainance
const rows = document.getElementsByClassName("row");

let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
     
    } else if (currentHour < rowHour) {
      setColor(row, "green");
      
    } else if (currentHour > rowHour) {
      setColor(row, "lightgrey");
      
    } else {
      setColor(row, "white");
      
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}
