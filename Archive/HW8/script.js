var section1  = document.getElementById('s1');
console.log(section1);
//log all the paragraphs
var paragraphs = document.getElementsByClassName('paragraph')
console.log(paragraphs)
console.log(paragraphs[0])
var pagebreak = '<br><br>';
for (var i = 0; i < paragraphs.length; i++) {
	paragraphs[i].innerHTML = pagebreak + paragraphs[i].textContent;
}

var listitems = document.getElementsByTagName('li')
console.log(listitems)

var ullistitem = document.querySelector('ul>li');
console.log(ullistitem);


var nextitem = ullistitem.nextSibling.nextSibling;
var previousitem = ullistitem.previousSibling;
console.log(previousitem)
console.log(nextitem)




var list = document.getElementsByTagName('ul')[0]
console.log(list) 
var firstitem = list.firstChild;
console.log(firstitem.nextSibling)
var lastitem = list.lastChild;
console.log(lastitem.previousSibling)