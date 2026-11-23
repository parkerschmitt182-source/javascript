var mycar = {
 name: "SUV",
 description: "slow car that can drive",
 parts: [
 	{
 	title: "Engine", 
 	description: "Makes The Car run",
 	hasoil: true,
    needs: ['wiper fluid', 'gas', 'oil']
 	},
	{
	title: 'Seats',
	description: 'where you sit',
	hasheadrest: false,
	parts: ['seat', 'back', 'headrest']
	}
	],
 

 	Carunlocked: true,
 	numberoftires: 4,
 	numberofparts: function() {
 	return this.parts.length;
	}
};





var pageBreak = '<br><br>'
var header = document.getElementById('header');
var paragraph = document.getElementById('paragraph');
var div = document.getElementById('div');

console.log(mycar.parts[0].title);

header.textContent = mycar.name;

paragraph.textContent = mycar.description;

if (mycar.parts[0].hasoil) {
	div.innerHTML += pageBreak + 'Its got new oil'
};

div.innerHTML += pageBreak + mycar.parts[0].title
div.innerHTML += pageBreak + mycar.parts[1].title
div.innerHTML += pageBreak + 'Number of tires: ' + mycar.numberoftires;






//browser object model
console.log('your screen ' + window.screen.width);
window.open('https://apple.com')
window.alert("this car is now only $10")
//global
header.textContent = 'mycar'.toUpperCase()
var number = 89345.345345;
console.log(number.toFixed(2));
console.log(mycar.name.toLowerCase());
console.log(Math.PI);
console.log(number.toPrecision(4));
console.log(Math.round(442.2233));
var randomnumber = Math.random();
console.log(randomnumber.toFixed(1));

today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth() + 1);



























