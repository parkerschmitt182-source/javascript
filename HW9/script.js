var list = document.getElementsByTagName('ul')[1];
var newListItem = document.createElement('li');
var newText = document.createTextNode('create video games');
newListItem.appendChild(newText);
list.appendChild(newListItem);
list.removeChild(newListItem)
var header = document.querySelector('h2');
if (header.hasAttribute('class')) {
	var attribute =  header.getAttribute('class');
	console.log('header attribute is ' + attribute)
	header.className = 'header-color-red'
}