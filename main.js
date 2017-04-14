//========Required========//
var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");
var flashCards = require("./cards.js");
var inquirer = require("inquirer");
//var fs = require("fs");
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
    //getting the length of the qBaisc object!
    var basicLength = Object.keys(flashCards.qBasic).length;

    //making sure the inquirer prompt doesnt exceed beyond the questions available in the flashCards for qBasic
    if (basicCount < basicLength) {
        //using Object.keys and .values to set the variables and creating a new constructor from BasicCard
        var basicFirst = Object.keys(flashCards.qBasic)[basicCount];
        //console.log(basicConstruct);
        var basicSecond = Object.values(flashCards.qBasic)[basicCount];
        //console.log(basicConstruct);
        var basicConstruct = BasicCard(basicFirst, basicSecond);
        //console.log(basicConstruct.front);
        //console.log(basicConstruct.back);
        inquirer.prompt([{
            name: "question",
            message: basicConstruct.front
        }]).then(function(response) {
            //console.log(response);
            //handling user input better. making sure answer is similar to the answer and triming unecessary spaces.
            var ans = response.question.toLowerCase().trim();
            if (ans === basicConstruct.back.toLowerCase()) {
                console.log("That is correct. " + "'" + basicConstruct.back + "'" + "is the correct answer.");
                console.log("========================================");
                questionsCorrect++;
            } else {
                console.log("That is incorrect. " + "'" + basicConstruct.back + "'" + "is the correct answer.");
                console.log("========================================");
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
    //getting the length of qCloze object
    var clozeLength = Object.keys(flashCards.qCloze).length;
    //making sure counter doesnt exceed beyond the length of the object
    if (clozeCount < clozeLength) {
        var first = Object.keys(flashCards.qCloze)[clozeCount];
        var second = Object.values(flashCards.qCloze)[clozeCount];
        //using object.keys and values to set the variables and creating a new constructor from ClozeCard
        var construct = ClozeCard(first, second);
        inquirer.prompt([{
            name: "question",
            message: construct.partialText
        }]).then(function(response) {
            var ans = response.question.toLowerCase().trim();
            //console.log(response);
            if (ans === construct.cloze.toLowerCase()) {
                console.log("That is correct. " + construct.fullText);
                console.log("========================================");
                questionsCorrect++;
            } else {
                console.log("That is not correct. " + construct.fullText);
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

//starting game on typing node main.js
startGame();