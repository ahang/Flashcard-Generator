var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");
//var clozeCards = require("./clozejson.js");

//console.log(cCards);
//console.log(Object.keys(clozeCards));

var inquirer = require("inquirer");
var fs = require("fs");


var qCloze = {
    "Batman is Bruce Wayne": "Batman",
    "Damian Wayne is the child of Bruce Wayne and Talia al Ghul. He also takes on the identity of Robin.": "Talia al Ghul"
};

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

var count = 0;
var clozeGame = function() {
    console.log("The count is " + count);
    console.log(qCloze);
    var first = Object.keys(qCloze)[count];
    var second = Object.values(qCloze)[count];
    var construct = ClozeCard(first, second);
    //console.log(construct.partialText);
   // console.log(first);

    // console.log(newQ);
    inquirer.prompt([
    {
        name: "question",
        message: construct.partialText
    }
    ]).then(function(response) {
        console.log(response);
        if (response.question === second){
            console.log("Yes!!");
        } else {
            console.log("NO!!");
        }
        count++;
        clozeGame();
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
