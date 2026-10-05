var mycar = {
 name: "SUV",
 discription: "slow car that can drive",
 parts: ["engine", "brakes"],
 Carunlocked: true,
 numberoftires: 4,
 numberofparts: function() {
 	return this.parts.length;
	}
};
var myplane = new Object();
myplane.name = 'cessna';
myplane.discription = 'A small plane';
myplane.parts = ['engine','propeller','landing gear'];
myplane.flying = false;
myplane.numberofflights = 331;
myplane.numberofparts = function() {
return this.parts.length
};
console.log(myplane.numberofparts())
delete myplane.flying;
mycar['name'] = "Subaru";
console.log(mycar.name)