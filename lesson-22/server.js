var fs = require('fs');

fs.open(__filename, 'r', function(err, file) {
	console.log('IO!');
});

setImmediate(function(){
	console.log('immediate');
});

process.nextTick(function() {
	console.log('nextTick');
});




// var http = require('http');
// http.createServer(function(req,res) {
// 	var part = 0;
// 	setImmediate(function run(){
// 		heavyCalc(part++);
// 		if (notFinished) setImmediate(run);
// 	}); 
// }).listen(3000);






// var http = require('http');
// var server = new http.Server(function(req,res) {

// }).listen(3000);

// setTimeout(function() {
// 	server.close();
// }, 3000)

// var timer = setInterval(function(){
// 	console.log(process.memoryUsage());
// }, 1000);

// timer.unref();

