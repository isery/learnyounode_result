var http = require('http');
var path = process.argv[2];

var request = http.get(path, function(response) {
	response.setEncoding('utf8');
	var result = '';
	response.on("data", function(data) {
		console.log(data);
		result += data;
	});
	response.on("error", function(error) {
		return console.error(error);
	});
	response.on("end", function() {
		//console.log(result);
	});
});
