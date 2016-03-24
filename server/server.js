var http = require('http');

var server = new http.Server(); // http.Server -> net.Server -> EventEmitter 

server.listen(1337, '127.0.0.1');

var counter = 0;

// приклад класичної передачії ф-ції: в ф-цію додається своя фіча 
var emit = server.emit;
server.emit = function(e) {
	console.log(e);
	emit.apply(this, arguments);
} 

server.on('request', function(req,res) {
	res.end('Hello, world! ' + counter++);
})