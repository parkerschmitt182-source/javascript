var inv = {
 name: "ITEMS",
 description: "A Inventory Of all the items on this page",
 items: [
 	{
 	category: "Electronics", 
 	description: "Tablets, Phones, Laptops",
 	instock: true,
  stock: ['Phone', 'Laptop', 'IPad','mouse','keyboard']
 	},
	{
	category: 'Clothing',
	description: 'shirts pants etc',
	
	instock: true,
	stock: ['shirt', 'pants', 'shorts','socks','hat']
	

	}
	],
  	numberofparts: function() {
 	return this.items.length;
	}
 }
var pageBreak = "<br><br>";
var header = document.getElementById("header");
var paragraph = document.getElementById("paragraph");
var div = document.getElementById("div");
var count = inv.numberofparts();
header.textContent = inv.name;
paragraph.textContent = inv.description;

if (count == '2') {
	div.innerHTML += pageBreak + 'Categories is equal to 2';
}
if (count != '2') {
	div.innerHTML += pageBreak + 'Categories does not equal 2';
}
if (count === '2') {

div.innerHTML += pageBreak + 'Categories is strict equal to 2';

}
if (count !== '2') {

div.innerHTML += pageBreak + 'Categories is not strict equal to 2';

}
if (count > 2){

	div.innerHTML += pageBreak + 'Categories is greater than 2';
}
if (count < 2){

	div.innerHTML += pageBreak + 'Categories is less than 2';
}
if (count >= 2){

	div.innerHTML += pageBreak + 'Categories is greater than or equal to 2';
}

if (count <= 2){

	div.innerHTML += pageBreak + 'Categories is less than or equal to 2';
}

if (count!=='2' && count > 2) {
div.innerHTML += pageBreak + 'Categories is not strict equal to 2. And is greater than 2';
 

} else {

	div.innerHTML += pageBreak + 'Categories is strict equal to 2. or is less than 2';
}

if (count !== '2' || count > 2) {
	div.innerHTML += pageBreak + 'Categories is not strict equal to 2. or is greater than 2';
}

if (!(count == '2')) {
div.innerHTML += pageBreak + 'Categories is not 2';	
}


var date = new Date();
var day = date.getDay();
switch(day) {
	case 0:
		div.innerHTML += pageBreak + 'Sunday';
		break;
	case 1:
		div.innerHTML += pageBreak + 'Monday';
		break;

	case 2:
		div.innerHTML += pageBreak + 'Tuesday';
		break;

	case 3:
		div.innerHTML += pageBreak + 'Wednesday';
		break;

	case 4:
		div.innerHTML += pageBreak + 'Thursday';
		break;

	case 5:
		div.innerHTML += pageBreak + 'Friday';
		break;

	case 6:
		div.innerHTML += pageBreak + 'Saturday';
		break;
}




































