const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const hideShowBtn = document.querySelector(".hideShowBtn");

let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.*[!@#$%^&*()?_~-]/;
let level = 0;

function trigger(){
	if(input.value != ""){
		indicator.style.display = "block";
		indicator.style.display = "flex";

		if(input.value.match(regExpWeak) || 
		   input.value.match(regExpMedium) || 
		   input.value.match(regExpStrong))
			level =1;

		if( ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || 
			(input.value.match(regExpMedium) && input.value.match(regExpStrong))|| 
			(input.value.match(regExpWeak) && input.value.match(regExpStrong))))
			level =2;

		if( input.value.match(regExpWeak) &&
			input.value.match(regExpMedium) &&
			input.value.match(regExpStrong))
			level =3;

		if(level ==1){
			weak.classList.add("active");
			text.style.display = "block";
			text.textContent = "Your password is too week";
			text.classList.add("weak");
		}

		if(level ==2){
			medium.classList.add("active");
			text.textContent = "Your password is medium";
			text.classList.add("medium");
		}else{
			medium.classList.remove("active");
			text.classList.remove("medium");
		}

		if(level ==3){
			medium.classList.add("active");
			strong.classList.add("active");
			text.textContent = "Your password is strong";
			text.classList.add("strong");
		}else{
			strong.classList.remove("active");
			text.classList.remove("strong");
		}

		hideShowBtn.style.display = "block";
		hideShowBtn.onclick = function(){
			if(input.type == "password"){
				input.type = 'text';
				hideShowBtn.textContent = "HIDE";
			} else {
				input.type = 'password';
				hideShowBtn.textContent = "SHOW";
			}
		}

	} else {
		indicator.style.display = "none";
		text.style.display = "none";
		hideShowBtn.style.display = "none";
	}
}