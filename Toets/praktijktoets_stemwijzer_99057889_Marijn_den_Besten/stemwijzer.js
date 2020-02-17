var body = document.getElementsByTagName("BODY")[0];

var divAll = document.createElement("div");

body.style.backgroundColor = "grey";

body.appendChild(divAll);
divAll.style.width = "600px";
divAll.style.height = "190px";
divAll.style.backgroundColor = "white";
divAll.style.marginLeft = "450px";
divAll.style.border = "1.5px";
divAll.style.borderStyle = "solid";
divAll.style.borderColor = "#000";
divAll.style.marginTop = "100px";
divAll.style.color = "white";
divAll.style.fontFamily = "montserratbold,Helvetica,Arial,sans-serif";
divAll.style.fontSize = "20px";

var divHeader = document.createElement("div");

divAll.appendChild(divHeader);
divHeader.style.width = "600px";
divHeader.style.height = "75px";
divHeader.style.backgroundColor = "red";
divHeader.style.color = "black";
divHeader.style.textAlign = "center";

var kiesPartij = document.createTextNode("Kies hier uw partij");

divHeader.appendChild(kiesPartij);

var divButtons = document.createElement("div");

divAll.appendChild(divButtons);
divButtons.style.width = "600px";
divButtons.style.height = "75px";
divButtons.style.backgroundColor = "white";
divButtons.style.color = "white";

var divFooter = document.createElement("div");

divAll.appendChild(divFooter);
divFooter.style.width = "600px";
divFooter.style.height = "40px";
divFooter.style.backgroundColor = "yellow";
divFooter.style.color = "black";
divFooter.style.textAlign = "center";

var copyrightName = document.createTextNode("\u00A9 Marijn");

divFooter.appendChild(copyrightName);

var buttons = ["CDA", "VVD", "PvdA", "D66"];
var amountButtons = buttons.length;
var idAmount = 0;
var stemmen = [];
var buttonArray = [];

for (i = 0; i < amountButtons; i++){
	stemmen.push(0);
}

if (amountButtons != 0){
	for (i = 0; i < amountButtons; i++){
		var naamPartij = document.createTextNode(buttons[i]);
		buttonsAdd(idAmount, naamPartij);
		idAmount++;
	}
	var naam = document.createTextNode("Stemmen tellen");
	var stemmenTelButton = document.createElement("button");
	stemmenTelButton.id = "Stemmentellen";
	divButtons.appendChild(stemmenTelButton);
	stemmenTelButton.appendChild(naam);
	stemmenTelButton.style.width = "200px";
	stemmenTelButton.style.height = "25px";
	stemmenTelButton.style.backgroundColor = "blue";
	stemmenTelButton.style.border = "black solid 1px";

	stemmenTelButton.onclick = function(){
		
	}
}

function buttonsAdd(id, naam) {
	var button = document.createElement("button");
	button.id = id;
	divButtons.appendChild(button);
	button.appendChild(naam);
	button.style.width = "50px";
	button.style.height = "25px";
	button.style.backgroundColor = "green";
	button.style.border = "black solid 1px";
	button.style.margin = "10px";

	button.onclick = function(){
		stemmen[this.id]++;
	}

	buttonArray.push(id);
}