var div = document.getElementById("container");
var x = document.getElementsByTagName("BODY")[0];

div.style.backgroundColor = "#fff"
div.style.height = "100px";
div.style.width = "500px";
div.style.margin = "0px auto";

var button1 = document.createElement("BUTTON");
button1.innerHTML = "button 1";                   
div.appendChild(button1);
button1.style.backgroundColor = "green";
button1.style.height = "50px";
button1.style.width = "150px";
button1.style.marginLeft = "10px";
button1.style.marginTop = "25px";
button1.onclick = function(){
	x.style.backgroundColor = "green";
}

var button2 = document.createElement("BUTTON");
button2.innerHTML = "button 2";                   
div.appendChild(button2);
button2.style.backgroundColor = "red";
button2.style.height = "50px";
button2.style.width = "150px";
button2.style.marginLeft = "10px";
button2.style.marginTop = "25px";
button2.onclick = function(){
	x.style.backgroundColor = "red";
}

var button3 = document.createElement("BUTTON");
button3.innerHTML = "button 3";                   
div.appendChild(button3);
button3.style.backgroundColor = "blue";
button3.style.height = "50px";
button3.style.width = "150px";
button3.style.marginLeft = "10px";
button3.style.marginTop = "25px";
button3.onclick = function(){
	x.style.backgroundColor = "blue";
}