var http = require('http');
var url = require('url');

var createIsoJson = function (data) {
	var date = new Date(data.iso);
	var json = {
		"hour": date.getHours(),
		"minute": date.getMinutes(),
		"second": date.getSeconds()
	};
	return JSON.stringify(json);
};
var createUnixJson = function (data) {
	var date = new Date(data.iso);
	var json = {
		"unixtime": date.getTime()
	};
	return JSON.stringify(json);
};

var server = http.createServer(function (request, response) {
	var query = url.parse(request.url, true).query;
	var pathname = url.parse(request.url, true).pathname;
	if (pathname == '/api/parsetime') {
		var result = createIsoJson(query);
	}
	else if (pathname == '/api/unixtime') {
		var result = createUnixJson(query);
	}
	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end(result);
})
server.listen(8000);