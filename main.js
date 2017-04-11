var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");

var superman = new ClozeCard("Superman was a kryptonian alien", "kryptonian");
var batman = new BasicCard("Batman is an orphan", "Orphan");

console.log(superman);
console.log(batman);