var http = require('http');

var server = http.createServer(function (request, response) {
	if (request.method == 'POST') {
		var body = '';
		request.on('data', function (data) {
			body += data;
		});
		request.on('end', function () {
			response.end(body.toUpperCase());
		});
	}
})
server.listen(8000);