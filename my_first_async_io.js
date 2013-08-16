var fs = require('fs');
var path = process.argv[2];

var data = fs.readFile(path, 'utf8', function(error, data) {
	lines = data.split('\n');
	console.log(lines.length);
});
