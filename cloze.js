//e.g. "George Washington was the first president of the United States.", "George Washington"

var ClozeCard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;

    this.clozeDel = function() {
        //returns answer
        //returns "George Washington"
        console.log("ClozingDel");
    }

    this.partialText = function() {
        //returns question/sentence
        //returns ... was the first president of the United States.
        console.log("ClozingDel");
    }

    this.fullText = function() {
        //returns full answer imbedded
        //"George Washington was the first president of the United States."
    }

}

module.exports = ClozeCard;