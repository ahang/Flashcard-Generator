//e.g. "George Washington was the first president of the United States.", "George Washington"

var ClozeCard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;

    this.partialText = this.text.replace(this.cloze, "...");
    // {
    //     //returns question/sentence
    //     //returns ... was the first president of the United States.
    //     // console.log("partial");
    //     console.log(this.text.replace(this.cloze, "..."));

    // }

    this.fullText = this.text ;
    // {
    //     //returns full answer imbedded
    //     //"George Washington was the first president of the United States."
    //     console.log("full text");
    //     this.text
    // }

}

module.exports = ClozeCard;