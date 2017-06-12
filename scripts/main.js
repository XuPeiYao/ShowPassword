var main = function(){
	var passwordList = document.querySelectorAll("input[type='password']");
	for(let i = 0 ; i < passwordList.length ; i++){
		if(passwordList[i].attributes['data-showPassword'] == true)continue;
		let showButton = document.createElement("div");
		showButton.classList.add("showPwdButton");
		
		showButton.style.height = (passwordList[0].clientHeight 
			+ parseInt(getComputedStyle(passwordList[i]).borderBottom)
			+ parseInt(getComputedStyle(passwordList[i]).borderTop))
			+ "px";
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
		showButton.style.top = parseInt(getComputedStyle(passwordList[i]).marginTop) + 
			parseInt(getComputedStyle(passwordList[i].parentNode).paddingTop) +  "px";
		showButton.style.right = parseInt(getComputedStyle(passwordList[i]).borderRight) + "px";
		
		passwordList[i].parentNode.style.position = "relative";
		passwordList[i].style.setProperty("width", getComputedStyle(passwordList[i]).width, "important");
		passwordList[i].style.paddingRight = showButton.style.width;
		
		
		insertAfter(showButton,passwordList[i])
		
		//passwordList[i].parentNode.insertBefore(showButton,passwordList[i]);
				
		passwordList[i].attributes['data-showPassword'] = true;
	}
}
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
setInterval(main,1000);