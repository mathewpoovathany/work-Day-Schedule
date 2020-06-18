/*

$("#currentDay").text(moment().format('ddd, MMM Do'));

//currentTime to determine if the hour matchs for color
var currentTime = moment().format('H');
console.log(moment())

//todo project
// Use window.localStoirage to retreve and store your data object as string
const LS = JSON.parse(localStorage.scheduler || '{}'); // now an Object

// double click makes calender content editable

$(".textData").dblclick(function () {
    $(this).addClass('d-none')
    $(this).siblings("input").removeClass("d-none");
});

$(".btn").dblclick(function () {
    console.log(this);
    console.log($(this).attr("id"))
    var id = $(this).attr("id")
    var time = id.slice(0,3)
    console.log(time)

    var timeInputId = time + "Input"; 
});





// save makes edit end

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
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

// set active time



// make background color of / past hours gray / current hour red / future hours green
var hourPast = hourPast < currentTime;
var hourNow = currentTime;
var hourFuture = hourFuture < currentTime;

// if currentTime > hourNow make background color gray//


    var hourNow = currentTime;
console.log(hourNow)
console.log(currentTime)
    function backgroundColorEdit(){
        if (hourNow == currentTime){
            document.getElementsByClassName("backgroundTool").style.backgroundColor = "#ff0000";
        }else if (hourNow < currentTime){
            document.getElementsByClassName("backgroundTool").style.backgroundColor = "#d3d3d3";
        }else 
        {
            document.getElementsByClassName("backgroundTool").style.backgroundColor = "#90ee90";
        }
} */
// if currentTime = hourNow make background color Red //

// if currentTime < hourNow make background color green //


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