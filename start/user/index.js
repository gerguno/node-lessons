// exports & global

var db = require('db');
var log = require('logger')(module);

function User(name) {
	this.name = name;
}

User.prototype.hello = function(who){
	log(db.getPhrase("Hello") + ", " + who.name);
}

// module.exports = exports = this

module.exports = User;

// exports.User = User;
// global.User = User;