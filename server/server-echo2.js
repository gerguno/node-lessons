// http://127.0.0.1/echo?message=Hello  ->  Hello

var http = require('http');
var url = require('url');

var server = new http.Server(function(req,res) {
	console.log(req.headers);
	
	var urlParsed = url.parse(req.url, true); // true важливе, бо розбирає строку 'message=Hello' в обєкт
	debugger;

	if (urlParsed.pathname == "/echo" && urlParsed.query.message) {
		// res.writeHead(200, "OK", {'Cache-control': 'no-cache'});
		res.setHeader('Cache-control', 'no-cache'); // шоб не кешувались response
		res.end(urlParsed.query.message);
		return;
	} else {
		res.statusCode = 404;
		res.end('404: Page not found');
	}		
}); 

server.listen(1337, '127.0.0.1');
console.log('Server is running');
