// схоже на stringify

var util = require('util');

var obj = {
	a: 5,
	b: 6
	// ,
	// inspect: function() {
	// 	console.log('Lol');
	// }
}

obj.self = obj;

console.log(util.inspect(obj));
// console.log(obj);
// console.log(JSON.stringify(obj));