var today = new Date(); //date var
var hourNow = today.getHours(); //number 123
var greeting = "yo bro"; //string ~-~-~
var displayGreeting = true; //its true i promise you
//hello dowg my comment is so cool and long its
if (hourNow > 18) {
    greeting = "yooooooo its late  go to bed bro you need to get up at 5AM";
} else if (hourNow > 12) {
    greeting = "yooooooooooo you need to eat lunch bro";
} else if (hourNow > 0); {
greeting = "hi";
}
var displayWeather = true;
var degreesCelsius = 27;
var deegreesFarenheit = degreesCelsius * (9/5) + 32;
if (displayWeather){
    document.write("<br> it is currnetly " + deegreesFarenheit + ' degrees farenheit');
}

document.write(greeting);
var skyConditions = ['Sunny', 'Rainy', 'Cloudy'];
document.write("tpday it is " + skyConditions[0]);

