
//Date and time
function time() {
  var currentTime = new Date();
  var currentHours = currentTime.getHours() % 12;
  var currentMinutes = currentTime.getMinutes();
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
}
setInterval(time, 1000); //call the function every second
time();

//Automatically refreshing the page every day
function reload() {
  var time = new Date();
  var hours = time.getHours();
  if (hours === 3){
  window.location.reload(true);
  }
}
setInterval(reload, 1000);
reload();


//ALARM CLOCK
var musicSource = 'goodMorning.mp3';
var music = new Audio (musicSource);

music.play();

