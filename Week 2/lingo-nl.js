var words = [
	"appel",
	"aldus",
	"afwas",
	"aftel",
	"aarde",
	"armen",
	"actie",
	"apart",
	"adres",
	"avond",
	"aders",
	"alarm",
	"boten",
	"balen",
	"beter",
	"bomen",
	"boren",
	"boven",
	"boxen",
	"brood",
	"broek",
	"brand",
	"breed",
	"benen",
	"beeld",
	"brief",
	"beten",
	"basis",
	"blauw",
	"beren",
	"buren",
	"banen",
	"bloed",
	"broer",
	"blond",
	"boter",
	"beleg",
	"breng",
	"baken",
	"beker",
	"blind",
	"bezig",
	"baden",
	"bedel",
	"bazen",
	"bazin",
	"baren",
	"beden",
	"beken",
	"bezem",
	"baard",
	"bidet",
	"breuk",
	"conus",
	"cello",
	"creme",
	"cloud",
	"cacao",
	"cadet",
	"cavia",
	"ceder",
	"combi",
	"china",
	"clown",
	"draai",
	"deden",
	"dalen",
	"derde",
	"delen",
	"dwaas",
	"daden",
	"dader",
	"dames",
	"diner",
	"datum",
	"dozen",
	"dreun",
	"duits",
	"dagen",
	"deren",
	"dwerg",
	"dwaal",
	"dwing",
	"druil",
	"droog",
	"draad",
	"dweil",
	"drank",
	"duren",
	"dwars",
	"drugs",
	"daten",
	"daler",
	"doorn",
	"disco",
	"degen",
	"droom",
	"dient",
	"drone",
	"dadel",
	"duwen",
	"druif",
	"deken",
	"deler",
	"elven",
	"eigen",
	"enger",
	"engel",
	"elder",
	"enkel",
	"effen",
	"email",
	"egaal",
	"fiets",
	"friet",
	"files",
	"forel",
	"films",
	"feest",
	"fruit",
	"falen",
	"flora",
	"fauna",
	"feeen",
	"freak",
	"forum",
	"fusie",
	"geven",
	"gaven",
	"groen",
	"graai",
	"getal",
	"grens",
	"grond",
	"groef",
	"graal",
	"gewei",
	"games",
	"grote",
	"groet",
	"garen",
	"gebak",
	"graag",
	"genre",
	"glans",
	"geluk",
	"geeuw",
	"horen",
	"heren",
	"halen",
	"hagel",
	"haren",
	"helen",
	"harde",
	"hemel",
	"hoofd",
	"huren",
	"hamer",
	"haken",
	"heden",
	"hotel",
	"hobby",
	"heler",
	"hoger",
	"ieder",
	"index",
	"immer",
	"icoon",
	"inlog",
	"inzet",
	"innig",
	"jovel",
	"jaren",
	"jicht",
	"jabot",
	"jacht",
	"jaden",
	"jagen",
	"jager",
	"japon",
	"jarig",
	"jawel",
	"jeans",
	"jemig",
	"jeugd",
	"joint",
	"jonas",
	"joule",
	"koken",
	"kreet",
	"koker",
	"kerst",
	"kegel",
	"koude",
	"kader",
	"krent",
	"kamer",
	"kaars",
	"kaart",
	"kraan",
	"krant",
	"keren",
	"kruid",
	"kerel",
	"kubus",
	"kraal",
	"kleur",
	"kroon",
	"klein",
	"korst",
	"klopt",
	"kabel",
	"kunst",
	"kopje",
	"krans",
	"klimt",
	"kater",
	"klink",
	"kudde",
	"kruis",
	"lopen",
	"laten",
	"lepel",
	"links",
	"laden",
	"leven",
	"lezen",
	"lucht",
	"lenen",
	"laser",
	"lente",
	"licht",
	"lader",
	"leder",
	"lunch",
	"lijst",
	"leger",
	"leden",
	"legen",
	"lagen",
	"lezer",
	"lever",
	"lingo",
	"loper",
	"luier",
	"lager",
	"leeuw",
	"maand",
	"malen",
	"maken",
	"media",
	"meter",
	"motor",
	"maten",
	"markt",
	"mazen",
	"molen",
	"meest",
	"meren",
	"model",
	"meden",
	"maden",
	"macht",
	"meeuw",
	"mager",
	"magen",
	"maren",
	"manen",
	"noord",
	"nieuw",
	"negen",
	"namen",
	"neven",
	"nodig",
	"naden",
	"neder",
	"nemen",
	"onder",
	"optel",
	"ovaal",
	"ovale",
	"onwel",
	"optie",
	"orden",
	"oppas",
	"ouder",
	"ophef",
	"oases",
	"palen",
	"plein",
	"pegel",
	"paars",
	"prijs",
	"piano",
	"pixel",
	"paden",
	"pasta",
	"pizza",
	"poten",
	"paard",
	"puber",
	"pauze",
	"preek",
	"polis",
	"pater",
	"proef",
	"panda",
	"penis",
	"prins",
	"pluto",
	"polen",
	"plint",
	"quota",
	"quant",
	"quark",
	"queue",
	"quilt",
	"quote",
	"robot",
	"reken",
	"raden",
	"regen",
	"radio",
	"rente",
	"regio",
	"rugby",
	"reden",
	"roken",
	"ruzie",
	"ruist",
	"regel",
	"racen",
	"races",
	"riool",
	"ramen",
	"radar",
	"roman",
	"rokje",
	"razen",
	"roede",
	"staan",
	"staal",
	"speel",
	"steeg",
	"stoel",
	"stook",
	"steek",
	"schep",
	"spijs",
	"stoep",
	"shirt",
	"samen",
	"sites",
	"sport",
	"spalk",
	"sjaal",
	"storm",
	"staat",
	"steun",
	"strak",
	"serie",
	"shows",
	"schat",
	"snoep",
	"sfeer",
	"smeer",
	"speer",
	"scene",
	"speld",
	"smeed",
	"smaak",
	"super",
	"stand",
	"steer",
	"smelt",
	"sedan",
	"skier",
	"sluis",
	"sneer",
	"steel",
	"truck",
	"terug",
	"typen",
	"talen",
	"taboe",
	"tegel",
	"taart",
	"tafel",
	"trouw",
	"teken",
	"teren",
	"taken",
	"treur",
	"tenen",
	"titel",
	"thuis",
	"tiara",
	"teder",
	"toets",
	"tabak",
	"trein",
	"tarwe",
	"telen",
	"teler",
	"uiten",
	"uilig",
	"uitje",
	"uiver",
	"ultra",
	"uniek",
	"uppie",
	"uraan",
	"uiers",
	"velen",
	"vloer",
	"video",
	"varen",
	"vegen",
	"veren",
	"vader",
	"vaten",
	"vuren",
	"vrouw",
	"vlees",
	"vogel",
	"vroeg",
	"vezel",
	"veins",
	"vorst",
	"veder",
	"vanaf",
	"vieze",
	"veger",
	"villa",
	"veler",
	"vrede",
	"vries",
	"woord",
	"wagen",
	"wonen",
	"waren",
	"warme",
	"weten",
	"water",
	"weren",
	"wazig",
	"wegen",
	"weven",
	"wezen",
	"weken",
	"wraak",
	"wilde",
	"wreed",
	"wrede",
	"wenst",
	"woest",
	"xenon",
	"yacht",
	"yucca",
	"zwaar",
	"zware",
	"zesde",
	"zagen",
	"zalig",
	"zomer",
	"zeden",
	"zwart",
	"zeven",
	"zicht",
	"zadel",
	"zweet",
	"zenuw",
	"zweer",
	"zweef",
	"zaden",
	"zaken",
	"zeker",
	"zever",
	"zeeen"];

var rand = words[Math.floor(Math.random() * words.length)];
console.log(rand);

var randomWoordLetter = [];
randomWoordLetter.push(rand[0]);

var woord = [];
var randomWoord = [];
var letters = [];

var body = document.getElementsByTagName("BODY")[0];

var divInvoer = document.createElement("div");

body.appendChild(divInvoer);
divInvoer.style.width = "600px";
divInvoer.style.backgroundColor = "green";
divInvoer.style.marginLeft = "450px";
divInvoer.style.border = "1.5px";
divInvoer.style.borderStyle = "solid";
divInvoer.style.borderColor = "#000";
divInvoer.style.marginTop = "100px";
divInvoer.style.color = "white";
divInvoer.style.fontFamily = "montserratbold,Helvetica,Arial,sans-serif";
divInvoer.style.fontSize = "20px";

var textWoord = document.createElement("p");
var inputWoord = document.createElement("INPUT");
inputWoord.setAttribute("type", "text");

divInvoer.appendChild(textWoord);
var text = document.createTextNode("Woord :");

textWoord.appendChild(text);
textWoord.appendChild(inputWoord);

textWoord.style.marginLeft = "20px";
inputWoord.style.marginLeft = "110px";

var checkButton = document.createElement("BUTTON");

var buttonText = document.createTextNode("Check");
checkButton.appendChild(buttonText);

divInvoer.appendChild(checkButton);
checkButton.style.marginBottom = "10px";
checkButton.style.marginLeft = "250px";

var eersteLetterBlok = document.createElement("div");
divInvoer.appendChild(eersteLetterBlok);

var eersteLetter = document.createTextNode("De eerste letter is: ");

eersteLetterBlok.appendChild(eersteLetter);
var letterUitList = document.createTextNode(randomWoordLetter);

eersteLetterBlok.appendChild(letterUitList);
eersteLetterBlok.style.color = "black";

var speelbordDiv = document.createElement("div");

body.appendChild(speelbordDiv);
speelbordDiv.style.width = "600px";
speelbordDiv.style.backgroundColor = "blue";
speelbordDiv.style.marginLeft = "450px";
speelbordDiv.style.border = "1.5px";
speelbordDiv.style.borderStyle = "solid";
speelbordDiv.style.borderColor = "#000";
speelbordDiv.style.marginTop = "2px";
speelbordDiv.style.textAlign = "center";

speelbordDiv.style.display = "grid";
speelbordDiv.style.gridTemplateColumns = "120px 120px 120px 120px 120px";

checkButton.onclick = function(){
	woord = inputWoord.value.toLowerCase();
	randomWoord = rand;

	var l1 = document.createElement("div");
	var l2 = document.createElement("div");
	var l3 = document.createElement("div");
	var l4 = document.createElement("div");
	var l5 = document.createElement("div");

	var WoordSpliced1 = document.createTextNode(woord[0]);
	l1.appendChild(WoordSpliced1);
	
	speelbordDiv.appendChild(l1);
	l1.style.gridColumn = "1/2";

	var WoordSpliced2 = document.createTextNode(woord[1]);
	l2.appendChild(WoordSpliced2);
	
	speelbordDiv.appendChild(l2);
	l2.style.gridColumn = "2/3";

	var WoordSpliced3 = document.createTextNode(woord[2]);
	l3.appendChild(WoordSpliced3);
	
	speelbordDiv.appendChild(l3);
	l3.style.gridColumn = "3/4";

	var WoordSpliced4 = document.createTextNode(woord[3]);
	l4.appendChild(WoordSpliced4);
	
	speelbordDiv.appendChild(l4);
	l4.style.gridColumn = "4/5";

	var WoordSpliced5 = document.createTextNode(woord[4]);
	l5.appendChild(WoordSpliced5);
	
	speelbordDiv.appendChild(l5);
	l5.style.gridColumn = "5/6";

	l1.style.border = "1px solid black";
	l2.style.border = "1px solid black";
	l3.style.border = "1px solid black";
	l4.style.border = "1px solid black";
	l5.style.border = "1px solid black";

	letters = [];

	gok = [];
	lingoWoord = [];

	gok.push(woord[0], woord[1], woord[2], woord[3], woord[4]);
	lingoWoord.push(rand[0], rand[1], rand[2], rand[3], rand[4]);

	console.log(letters);

	letters[0] = 0;
	letters[1] = 0;
	letters[2] = 0;
	letters[3] = 0;
	letters[4] = 0;

	for (i = 0; i < rand.length; i++){
		if (lingoWoord[i] == gok[i]) {
			letters[i] = 1;
			gok[i] = false;
			lingoWoord[i] = false;
		}
	}
	console.log(lingoWoord);
	console.log(gok);
	console.log(letters);

	for(var i=0; i<letters.length; i++){
		if(letters[i] == 0){
			for (o = 0; o < rand.length; o++){
				if (gok[i] == lingoWoord[o]) {
					letters[i] = 2;
					gok[i] = false;
					lingoWoord[o] = false;
				}
			}
		}
	}


	console.log(lingoWoord);
	console.log(gok);
	console.log(letters);

	// for (o = 0; o < rand.length; o++){
	// 	for (i = 0; i < rand.length; i++){
	// 		if (rand[i] == woord[o]) {
	// 			if (letters[i] != 1 && letters[o] != 1) {
	// 				letters[o] = 2;
	// 			}
	// 		}
	// 	}
	// }

	if (letters[0] == 1) {
		l1.style.backgroundColor = "green";
	}else if (letters[0] == 2) {
		l1.style.backgroundColor = "orange";
		l1.style.borderRadius = "25px";
	}


	if (letters[1] == 1) {
		l2.style.backgroundColor = "green";
	}else if (letters[1] == 2) {
		l2.style.backgroundColor = "orange";
		l2.style.borderRadius = "25px";
	}

	if (letters[2] == 1) {
		l3.style.backgroundColor = "green";
	}else if (letters[2] == 2) {
		l3.style.backgroundColor = "orange";
		l3.style.borderRadius = "25px";
	}

	if (letters[3] == 1) {
		l4.style.backgroundColor = "green";
	}else if (letters[3] == 2) {
		l4.style.backgroundColor = "orange";
		l4.style.borderRadius = "25px";
	}

	if (letters[4] == 1) {
		l5.style.backgroundColor = "green";
	}else if (letters[4] == 2) {
		l5.style.backgroundColor = "orange";
		l5.style.borderRadius = "25px";
	}

	if (letters[0] && letters[1] && letters[2] && letters[3] && letters[4] == 1) {
		alert("Solved");
		location.reload();
	}
}