function cat (name) {
	this.stomach = [];
	this.name = name;
}

cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
};

module.exports = cat;