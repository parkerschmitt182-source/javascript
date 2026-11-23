var firstnameinput;
var lastnameinput;
var emailinput;
var messageinput;
var sendinput;
var error;
firstnameinput = document.getElementById('first');
lastnameinput = document.getElementById('last');
emailinput = document.getElementById('email');
messageinput = document.getElementById('message');
sendinput = document.getElementById('send');
error = document.getElementById('error');

function validatefirstname(){
	if(firstnameinput.value == ''){
		error.innerHTML += '<br> Firstname must have at least one letter'

	}

}
function validateEmail(e) {
if (!emailinput.value.includes('@')) {
error.innerHTML += ' <br> No, no, no, you need a real email';
e.preventDefault();
}
}
firstnameinput.onblur = validatefirstname
sendinput.onclick = validateEmail;


function validatelastname(){
	if(lastnameinput.value == ''){
		error.innerHTML += '<br> Lastname must have at least one letter'

	}

}
lastnameinput.addEventListener('blur', validatelastname, false)
function validatemessage(minLength){
	if (messageinput.value.length < minLength){
		error.innerHTML+= '<br> Your message is too short.'
	}

}
messageinput.addEventListener('blur', function() { var minLength = 5; validatemessage(minLength)}, false)