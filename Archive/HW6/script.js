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
div.innerHTML += pageBreak + 'All Categories' 
for (var y = 0; y < count; y++) {
	div.innerHTML += pageBreak + '------' + inv.items[y].category;
	


}


var x = 0;
div.innerHTML += pageBreak + "Shopping By Category";
while (x < count) {
	
	if (inv.items[x].instock === true) {


		div.innerHTML += pageBreak + inv.items[x].category;
	
	var increment = 0;
	do {
	div.innerHTML += pageBreak + '------' + inv.items[x].stock[increment];
	increment ++;


	} while (increment < inv.items[x].stock.length);

	x++


	console.log(x)
}
}


