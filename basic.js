var BasicCard = function(front, back) {
    //console.log("Wow new BasicCard");
    if (this instanceof BasicCard) {
	    this.front = front;
	    this.back = back;
	} else {
		return new BasicCard(front, back);
	}
}

module.exports = BasicCard;