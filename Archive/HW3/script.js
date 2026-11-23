console.log("started code")
var message = 'The Bank';
var paragraphMessage = "Welcome to the bank";
var income = 300;
var lastmonthmoney = 1000;
var money = calculatemoney(income, lastmonthmoney);
function updateHeader() {
	var header = document.getElementById("header")
	header.textContent = message;
}
function updateParagraph() {
	var paragraph = document.getElementById('paragraph');
	paragraph.textContent = paragraphMessage
}
function calculatemoney(income, lastmonthmoney) {
	return income + lastmonthmoney
}
updateHeader();
updateParagraph();
console.log("Your Money $" + money);
var debt = (function() {
	var money = 1000;
	var interest = 10;
	return money + interest;
}());
console.log("you are $" + debt + " in debt");