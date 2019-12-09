var opdrachten = prompt("Welke opdracht wil je? (1 | 2 | 3 | 4 | 5 | 6 )");
if (opdrachten == "1") {
	opdracht1();
}
else if (opdrachten == "2") {
	opdracht2();
}

else if (opdrachten == "3") {
	opdracht3();
}

else if (opdrachten == "4") {
	opdracht4();
}

else if (opdrachten == "5") {
	opdracht5();
}

else if (opdrachten == "6") {
	opdracht6();
}

function opdracht1(){
	var dagen = [" maandag ", " dinsdag ", " woensdag ", " donderdag ", " vrijdag ", " zaterdag ", " zondag "];

	document.write("<h2>Alle dagen van de week zijn:</h2>");
	document.write(dagen.join(""));
	document.write("<br><br>");
	
	document.write("<h2>De werkdagen zijn:</h2>");
	for (var i = 0; i < dagen.length-2; i++) {
		document.write(dagen[i]);
	}
	
	document.writeln("<br><br>");
	
	document.write("<h2>De weekenddagen zijn:</h2>");
	document.write(dagen.splice(5, 7));
	dagen.push(" zaterdag ", " zondag ");
	
	dagen.reverse();
	
	document.write("<br><br>");
	
	document.write("<h2>Alle dagen van de week in omgekeerde volgorde zijn:</h2>");
	for (var i = 0; i < dagen.length; i++) {
		document.write(dagen[i]);
	}
	
	document.write("<br><br>");
	
	document.write("<h2>De werkdagen in omgekeerde volgorde zijn:</h2>");
	document.write(dagen.splice(2,7));
	
	document.write("<br><br>");
	
	document.write("<h2>De weekenddagen in omgekeerde volgorde zijn:</h2>");
	document.write(dagen);
}

function opdracht2() {
	var namenArray = [];
	var amountNames = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)");
	if (amountNames <3) {
		alert("Je moet minimaal 3");
		opdracht2();
	}
	else {
		for (i = 1; i <= amountNames; i++){
			var newName = namenArray.push(prompt("Welke naam wil je toevoegen?"));
			console.log(namenArray);
		}
	}
	document.write("<h2>De ingevoerde namen in de array zijn:</h2>");
	document.write(namenArray);
	document.write("<br><br>");

	namenArray.reverse();

	document.write(namenArray);
}

function opdracht3() {
	var arrayEen = [1,2,3,4,5,6,7,8,9,10];
	var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

	document.write("<h2>Array operatoren<h2>");
	document.write("<h2>Optellen van de twee arrays	zijn:<h2>");
	
	for (i = 0; i <= 9; i++){
		document.write(arrayEen[i] + " + " + arrayTwee[i] + " = " + (arrayEen[i] + arrayTwee[i]));
		document.write("<br>");
	}

	document.write("<br>");
	document.write("<h2>Aftrekken van de twee arrays	zijn:<h2>");

	for (i = 0; i <= 9; i++){
		document.write(arrayTwee[i] + " - " + arrayEen[i] + " = " + (arrayTwee[i] - arrayEen[i]));
		document.write("<br>");
	}

	document.write("<br>");
	document.write("<h2>Vermenigvuldigen van de twee arrays	zijn:<h2>");

	for (i = 0; i <= 9; i++){
		document.write(arrayEen[i] + " * " + arrayTwee[i] + " = " + (arrayEen[i] * arrayTwee[i]));
		document.write("<br>");
	}

	document.write("<br>");
	document.write("<h2>Delen van de twee arrays zijn:<h2>");

	for (i = 0; i <= 9; i++){
		document.write(arrayTwee[i] + " / " + arrayEen[i] + " = " + (arrayTwee[i] / arrayEen[i]));
		document.write("<br>");
	}
}

function opdracht4() {
	var getalen = [1,2,3,4,5,6,7,8,9,10];
	var tafels = [2,4,6,8];

	document.write("<h2>Tafel van 2:<h2>");

	for (i = 0; i <= 9; i++){
		document.write(getalen[i] + " * " + tafels[0] + " = " + (getalen[i] * tafels[0]));
		document.write("<br>");
	}

	document.write("<br>");
	document.write("<h2>Tafel van 4:<h2>");

	for (i = 0; i <= 9; i++){
		document.write(getalen[i] + " * " + tafels[1] + " = " + (getalen[i] * tafels[1]));
		document.write("<br>");
	}

	document.write("<br>");
	document.write("<h2>Tafel van 6:<h2>");

	for (i = 0; i <= 9; i++){
		document.write(getalen[i] + " * " + tafels[2] + " = " + (getalen[i] * tafels[2]));
		document.write("<br>");
	}

	document.write("<br>");
	document.write("<h2>Tafel van 8:<h2>");

	for (i = 0; i <= 9; i++){
		document.write(getalen[i] + " * " + tafels[3] + " = " + (getalen[i] * tafels[3]));
		document.write("<br>");
	}
}

function opdracht5() {
	var getal = prompt("Voer getal in");
	var array20 = [];

	for (i = 0; i <= getal; i++){
		array20.push(i);
		document.write(array20.join(",") + "<br>");
	}
}

function opdracht6() {
	var getallen = [];

	var test = parseInt(prompt("Vul een getal in"));
	
	for (var i = 0; i <= test; i++) {
		getallen.push(i);
	}
	for (var i = 0; i <= test; i++) {
		document.write(getallen.join("") + "<br>");
		getallen.pop();
	}
}