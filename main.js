//========Required========//
var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");
var flashCards = require("./cards.js");
var inquirer = require("inquirer");
var fs = require("fs");

//console.log(flashCards.qBasic);

//========Global Var========//
var questionsCorrect = 0;
var questionsIncorrect = 0;

//console.log(flashCards.qCloze);
//console.log(cCards);
//console.log(Object.keys(clozeCards));
//console.log(qCloze);

var startGame = function() {
    inquirer.prompt([{
        name: "card",
        type: "list",
        message: "What type of Card game would you like to play?",
        choices: ["ClozeCard", "BasicCard"]
    }]).then(function(answers) {
        //console.log(answers);

        if (answers.card === "BasicCard") {
            // console.log("This is starting a new inquirer prompt for BasicCard");
            basicGame();
        } else {
            // console.log("This is going to start a new inquirer prompt for ClozeCard");
            clozeGame();
        }
    });
};

var basicCount = 0;

var basicGame = function() {
    //using Object.keys and .values to set the variables and creating a new constructor from BasicCard
    var basicFirst = Object.keys(flashCards.qBasic)[basicCount];
    //console.log(basicConstruct);
    var basicSecond = Object.values(flashCards.qBasic)[basicCount];
    //console.log(basicConstruct);
    var basicConstruct = BasicCard(basicFirst, basicSecond);
    //console.log(basicConstruct.front);
    //console.log(basicConstruct.back);

    //making sure the inquirer prompt doesnt exceed beyond the 7 questions available
    if (basicCount < 6) {
        inquirer.prompt([{
            name: "question",
            message: basicConstruct.front
        }]).then(function(response) {
            //console.log(response);
            if (response.question === basicConstruct.back) {
                console.log("========================================");
                console.log("That is correct. " + "'" + basicConstruct.back + "'" + "is the correct answer.");
                console.log("========================================");
                questionsCorrect++;
            } else {
                console.log("========================================");
                console.log("That is incorrect. " + "'" + basicConstruct.back + "'" + "is the correct answer.");
                questionsIncorrect++;
            }
            basicCount++;
            basicGame();
        });
    } else {
        //Once counter reaches 6 then end the game and display scores
        console.log("========================================");
        console.log("Basic Game Completed");
        console.log("Correct Questions Answered " + questionsCorrect);
        console.log("Incorrect Questions Answered " + questionsIncorrect);
        console.log("========================================");
        playAgain();
    }
}

var clozeCount = 0;


var clozeGame = function() {
    //console.log("The count is " + clozeCount);
    //console.log(qCloze);
    //using object.keys and values to set the variables and creating a new constructor from ClozeCard
    var first = Object.keys(flashCards.qCloze)[clozeCount];
    var second = Object.values(flashCards.qCloze)[clozeCount];
    var construct = ClozeCard(first, second);
    //console.log(construct.partialText);
    // console.log(first);

    // console.log(newQ);
    //making sure counter doesnt exceed 6
    if (clozeCount < 6) {
        inquirer.prompt([{
            name: "question",
            message: construct.partialText
        }]).then(function(response) {
            //console.log(response);
            if (response.question === construct.cloze) {
                console.log("========================================");
                console.log("That is correct. " + construct.partialText.replace("...", "'" + construct.cloze + "'"));
                console.log("========================================");
                questionsCorrect++;
            } else {
                console.log("========================================");
                console.log("That is not correct. " + construct.partialText.replace("...", "'" + construct.cloze + "'"));
                console.log("========================================");
                questionsIncorrect++;
            }
            clozeCount++;
            clozeGame();
        });
    } else {
        //else game ends and displays score
        console.log("========================================");
        console.log("Cloze Game Completed");
        console.log("Correct Questions Answered " + questionsCorrect);
        console.log("Incorrect Questions Answered " + questionsIncorrect);
        console.log("========================================");
        playAgain();
    }
}

//starting game on typing node main.js
startGame();

var playAgain = function() {
    //checks to see if the user wants to play again
    inquirer.prompt([{
        name: "playAgain",
        type: "list",
        message: "Would you like to play a different card game?",
        choices: ["Yes", "No"]
    }]).then(function(response) {
        //console.log(response);
        if (response.playAgain === "Yes") {
            //setting all global vars to 0
            clozeCount = 0;
            questionsCorrect = 0;
            questionsIncorrect = 0;
            basicCount = 0;
            startGame();
        } else {
            console.log("Good Day");
        }
    });
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