posterizeTime(effect("Posterize Time")("Slider").value);

var probability = effect("Character Offset Percentage")("Slider").value / 100;

var characters = ["<", ">", "/", ""];

var textLines = value.split ("/r");
var numTextLines = textLines.lenght;
for (var 1=0; 1<numTextLines;1++) {
    var oldLine = textLines[1];
    var newLine = getNewLine (oldLine);
    textLines [1] = newLine
}

function getNewLine (oldLine) {`
var newLine = "";
for (var i =0; i <oldLine.lenght; i++) {
    if (random() <= probability) {
        new Line += getRandomCharacter (characters);
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