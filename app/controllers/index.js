function d2() {
	rollDie(2);
}
function d4() {
	rollDie(4);
}
function d6() {
	rollDie(6);
}
function d8() {
	rollDie(8);
}
function d10() {
	rollDie(10);
}
function d12() {
	rollDie(12);
}
function d20() {
	rollDie(20); 
}
function d100() {
	rollDie(100);
}
$.index.open();


function rollDie(d){
	die = getRandomInt(1, d + 1);
	$.CurrentDie.text = "D" + d + ": " + die;
	DiceRoll.play();
	var row = Titanium.UI.createTableViewRow({
    	title: 'D' + d + ': ' + die,
    	color: "white"
    	/* other properties */
	});
	if($.PreviousDice.data < 1){
		$.PreviousDice.appendRow(row);
	} else {
		$.PreviousDice.insertRowBefore(0,row);
	}
	
	if($.PreviousDice.data > 15){
		$.PreviousDice.deleteRow(15);
	}
}

//min inclusive, max exclusive
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Shake for D20, iPhone demo
Ti.Gesture.addEventListener('shake', function(e) {
	rollDie(20);
});

//Play sounds (can't get my iOS simulator to play sound')
var DiceRoll = Ti.Media.createSound({url:"../../dice.wav"});