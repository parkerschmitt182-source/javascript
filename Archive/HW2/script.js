var today = new Date(); //Get the current date and time
var hourNow = today.getHours(); //Get the current hour (0-23) from the date object
var greeting = "Hello, world!"; //A default greeting that will be overwritten based on the time of day
var displayGreeting = true; //


if (hourNow > 18 && displayGreeting) {
    greeting = "Good evening!";
} else if (hourNow > 12) {
    greeting = "Good afternoon!";
} else if (hourNow > 0) {
    greeting = "Good morning!";
}

var displayWeather = true;
var degreesCelsius = 27;
var deegreesFarenheit = degreesCelsius * (9/5) + 32;
if (displayWeather){
    document.write("<br> it is currnetly " + deegreesFarenheit + ' degrees farenheit');
}

document.write(greeting);
var skyConditions = ['Sunny', 'Rainy', 'Cloudy'];
skyConditions[0] = 'Windy';
document.write("tpday it is " + skyConditions[0]);


