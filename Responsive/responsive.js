var button = document.getElementById("menuBar");
var div = document.getElementById("computerHeader");

var openClose = 0;

button.onclick = function() {
	if (openClose == 0) {
		open();
	}
	else {
		close();
	}
}

function open(){
	div.style.display = "inline-block";
	div.style.height = "20em";
	div.style.border = "black solid 2px";
	div.style.padding = "1em";
	div.style.backgroundColor = "#8a2720";
	openClose++;
}

function close(){
	div.style.display = "none";
	openClose--;
}

