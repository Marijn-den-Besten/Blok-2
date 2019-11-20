var opdrachten = prompt("Welke opdracht wil je? (1 | 2 | 3 | 4)");
if (opdrachten == "1") {
	opdracht1();
}
else if (opdrachten == "2") {
	opdracht2();
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
	var namenArray;
	var amountNames = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)");
	for (i = 1; i <= amountNames; i++){
		var newName = prompt("Welke naam wil je toevoegen?");
		namenArray.push(newName);
	}
}