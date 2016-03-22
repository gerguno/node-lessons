// ця проблема вирішена в es6 з Class

var util = require('util');

// Parent
function Animal(name) {
	this.name = name;
}

Animal.prototype.walk = function(){
	 console.log('Ходить ' + this.name);
};


// Sibling
function Rabbit(name) {
	this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function(){
	 console.log('Стрибає ' + this.name);
};


// Usage
var rabbit = new Rabbit('Зайчик');
rabbit.walk();
rabbit.jump();
