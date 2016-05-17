var fs = require('fs');

var data = 'Lorem ipsum dolor sit amet';

fs.writeFile('file.tmp', data, function(err){
	if (err) throw err;
	fs.rename('file.tmp', 'lorem.txt', function(err){
		if (err) throw err;
	})
});


// fs.readFile('fgfg', {encoding: 'utf-8'}, function(err, data) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// })