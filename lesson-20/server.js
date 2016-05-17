var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
	var info;

	if (req.url = '/') {
		fs.readFile('index.html', function(err, info) {
			if (err) { 
				console.log(err);
				res.statusCode = 404;
				res.end('Page not Found');
				return;
			}
			res.end(info);
		});
	}

}).listen(3000);




















// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req,res) {
// 	var info;

// 	if (req.url == '/') {
// 		info = fs.readFileSync('index.html');
// 		res.end(info);
// 	} else {
// 		res.end(new Date().toString());
// 	}
// }).listen(3000);