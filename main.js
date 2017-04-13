var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");
var flashCards = require("./clozejson.js");
//console.log(flashCards.qCloze);
//console.log(cCards);
//console.log(Object.keys(clozeCards));

var inquirer = require("inquirer");
var fs = require("fs");

console.log(qCloze);
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

        if (answers.card === "BasicCard") {
            console.log("This is starting a new inquirer prompt for BasicCard");
        } else {
            console.log("This is going to start a new inquirer prompt for ClozeCard");
            clozeGame();
        }
    });
}; 

startGame();

var basicGame = function() {

}

var clozeCount = 0;
var questionsCorrect = 0;
var questionsIncorrect = 0;

var clozeGame = function() {
    //console.log("The count is " + clozeCount);
    //console.log(qCloze);
    var first = Object.keys(flashCards.qCloze)[clozeCount];
    var second = Object.values(flashCards.qCloze)[clozeCount];
    var construct = ClozeCard(first, second);
    //console.log(construct.partialText);
   // console.log(first);

    // console.log(newQ);
    if (clozeCount < 6) {
        inquirer.prompt([
        {
            name: "question",
            message: construct.partialText
        }
        ]).then(function(response) {
            console.log(response);
            if (response.question === second){
                console.log("========================================");
                console.log("That is correct. " + construct.partialText.replace("...", "'" + second + "'"));
                console.log("========================================");
                questionsCorrect++;
            } else {
                console.log("========================================");
                console.log("That is not correct. " + construct.partialText.replace("...", "'" + second + "'"));
                console.log("========================================");
                questionsIncorrect++;
            }
            clozeCount++;
            clozeGame();
        });
    } else {
        console.log("========================================");
        console.log("Game Completed");
        console.log("Correct Questions Answered " + questionsCorrect);
        console.log("Incorrect Questions Answered " + questionsIncorrect);
        console.log("========================================");
    }
}

//obj.keys





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
