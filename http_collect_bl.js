var http = require('http');
var bl = require('bl');
var path = process.argv[2];

var request = http.get(path, function(response) {
	response.pipe(bl(function (error, data) {
		if (error) return console.error(data)
		var result = data.toString();
		console.log(result.length);
		console.log(result);
	}));
});