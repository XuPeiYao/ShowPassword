var main = function(){
	var passwordList = document.querySelectorAll("input[type='password']");
	for(let i = 0 ; i < passwordList.length ; i++){
		if(passwordList[i].attributes['data-showPassword'] == true)continue;
		var showButton = document.createElement("div");
		showButton.classList.add("showPwdButton");
		
		showButton.style.height = passwordList[0].clientHeight + "px";
		showButton.style.width = "18px";

		var mouseDown = function(){
			showButton.classList.add("active");
			passwordList[i].type="text";
		}
		var mouseUp = function(){
			showButton.classList.remove("active");
			passwordList[i].type="password";
		}
		showButton.onmousedown = mouseDown;
		showButton.onmouseup = mouseUp;
		showButton.onmouseleave = mouseUp;
		
		passwordList[i].style.width = "calc(100% - " + showButton.style.width + ")"
		
		
		passwordList[i].parentNode.insertBefore(showButton,passwordList[i]);
		
		
		passwordList[i].attributes['data-showPassword'] = true;
	}
}
setInterval(main,1000);