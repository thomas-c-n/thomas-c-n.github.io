//ALARM CLOCK SETTINGS
var goodMorning = 'goodMorning.mp3';
var music = new Audio (goodMorning);



//Date and time
function time() {
  var currentTime = new Date();
  var currentHours = currentTime.getHours() % 12;
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();
  var currentMonth = currentTime.getMonth();
  var currentDate = currentTime.getDate();
  
  if (currentMinutes < 10){
  currentMinutes = '0' + currentMinutes;
  }           //adds a 0 if the minutes is a single digit
  
  if (currentHours === 0){
    currentHours = 12;
  }
  

var currentTimeString = currentHours + ':' + currentMinutes;
var clock = document.getElementById("clock");
clock.innerHTML = currentTimeString;
//now the month and day:
var months = ['January','February','March','April','May','June','July', 'August', 'September','October','November','December'];

currentMonth = months[currentMonth];
var currentDateString = currentMonth +' '+ currentDate;
var date = document.getElementById('date');
date.innerHTML = currentDateString;
  
  //ALARM CLOCK
if (currentHours === 11 && currentMinutes === 50 && currentSeconds === 00){
  music.play();
}
  
  
}
setInterval(time, 500); //call the function every half second
time();

//Automatically refreshing the page every day
function reload() {
  var time = new Date();
  var hours = time.getHours();
  if (hours === 3){
  window.location.reload(true);
  }
}
//call the reload function once every hour
setInterval(reload, 3600000);
reload();



