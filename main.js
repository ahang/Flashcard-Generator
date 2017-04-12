var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");
var inquirer = require("inquirer");
var fs = require("fs");

var startGame = function() {
    inquirer.prompt([
        {
            name: "card",
            type: "list",
            message: "What type of Card game would you like to try?",
            choices: ["ClozeCard", "BasicCard"]
        }
    ]).then(function(answers) {
        console.log(answers);
    });
}; 

startGame();





//Testing out .cloze/.fullText/.partialText
// var superman = ClozeCard("Superman was a kryptonian alien", "kryptonian");
// var spiderman = ClozeCard("Peter Parker is spiderman", "spiderman");
// var batman = new BasicCard("Who is batman?", "Bruce Wayne");

// console.log(batman.front);
// console.log(batman.back);

// console.log(superman);
// console.log(batman);

// console.log("---------------Superman--------");
// console.log(superman);
// console.log(superman.cloze);
// console.log(superman.fullText);
// console.log(superman.partialText);
// console.log("---------------Superman--------");


// console.log(spiderman.partialText);
// console.log(spiderman.cloze);
// console.log(spiderman.fullText);
