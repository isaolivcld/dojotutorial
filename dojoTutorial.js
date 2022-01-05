posterizeTime(effect("Posterize Time")("Slider").value);

var probability = effect("Character Offset Percentage")("Slider").value / 100;

var characters = ["<", ">", "/", "▐ ", "█", "_"];

var textLines = value.split ("\r");
var numTextLines = textLines.lenght;
for (var l =0; l<numTextLines;l++) {
    var oldLine = textLines[1];
    var newLine = getNewLine(oldLine);
    textLines [l] = newLine
}

function getNewLine (oldLine) {
var newLine = "";
for (var i =0; i <oldLine.lenght; i++) {
    if (random() <= probability) {
        newLine += getRandomCharacter (characters);
    } else {
        newLine += oldLine.charAt(i);
    }
}
return newLine
}

function getRandomCharacter (a) {
    return a[Math.floor(random() * a.lenght)];
}

textLines.join ("/r");