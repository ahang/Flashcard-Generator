var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");

var superman = new ClozeCard("Superman was a kryptonian alien", "kryptonian");
var spiderman = new ClozeCard("Peter Parker is spiderman", "spiderman");
var batman = new BasicCard("Batman is ...", "Bruce Wayne");

console.log(superman);
console.log(batman);

console.log("---------------Superman--------");
console.log(superman);
console.log(superman.cloze);
console.log(superman.fullText);
console.log(superman.partialText);
console.log("---------------Superman--------");


console.log(spiderman.partialText);
console.log(spiderman.cloze);
console.log(spiderman.fullText);
