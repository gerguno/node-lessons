// http://127.0.0.1/echo?message=Hello  ->  Hello

var http = require('http');
var url = require('url');

var server = new http.Server(function(req,res) {
	console.log(req.method, req.url);
	
	var urlParsed = url.parse(req.url, true); // true важливе, бо розбирає строку 'message=Hello' в обєкт
	console.log(urlParsed);

	// { protocol: null,
	//  slashes: null,
	//  auth: null,
	//  host: null,
	//  port: null,
	//  hostname: null,
	//  hash: null,
	//  search: '?message=Hello',
	//  query: 'message=Hello',
	//  pathname: '/echo',
	//  path: '/echo?message=Hello',
	//  href: '/echo?message=Hello' }

	if (urlParsed.pathname == "/echo" && urlParsed.query.message) {
		res.end(urlParsed.query.message);
	} else {
		res.statusCode = 404;
		res.end('Page not found');
	}
}); 

server.listen(1337, '127.0.0.1');
