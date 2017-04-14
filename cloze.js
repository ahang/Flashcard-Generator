//e.g. "George Washington was the first president of the United States.", "George Washington"
var ClozeCard = function(text, cloze) {
    if (this instanceof ClozeCard) {
        this.text = text;
        this.cloze = cloze;
        this.partialText = this.text.replace(this.cloze, "...");
        this.fullText = this.partialText.replace("...", "'" + this.cloze + "'");
    } else {
        return new ClozeCard(text, cloze);
    }
}

module.exports = ClozeCard;