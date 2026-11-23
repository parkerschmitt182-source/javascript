var firstnameinput;
var lastnameinput;
var emailnameinput;
var messagenameinput;
var sendnameinput;
var error;

firstnameinput = document.getElementById('first');
lastnameinput = document.getElementById('last');
emailnameinput = document.getElementById('email');
messagenameinput = document.getElementById('message');
sendnameinput = document.getElementById('send');
error = document.getElementById('error');

function validatefirstname(){
	if(firstnameinput.value == ''){
		error.innerHTML += '<br> firstname musty have one char'

	}

}


function validateEmail(e) {
if (!emailnameinput.value.includes('@')) {
error.innerHTML += ' Email is odd buddy, put your real data';
e.preventDefault();
}
}
firstnameinput.onblur = validatefirstname
sendnameinput.onclick = validateEmail;


function validatelastname(){
	if(lastnameinput.value == ''){
		error.innerHTML += '<br> lastname musty have one char'

	}

}
lastnameinput.addEventListener('blur', validatelastname, false)
function validatemessage(minLength){
	if (messagenameinput.value.length < minLength){
		error.innerHTML+= '<br> message is big bot'
	}

}
messagenameinput.addEventListener('blur', function() { var minLength = 5; validatemessage(minLength)}, false)