var net = require('net');

var makeTwoDigits = function (value) {
	if (value < 10) {
		return '0' + value;
	}
	else {
		return value;
	}
};

net.createServer(function (socket) {
	var date = new Date();
	var result = date.getFullYear() + '-' +
			makeTwoDigits(date.getMonth() + 1)+'-' +
			makeTwoDigits(date.getDate()) + ' ' +
			makeTwoDigits(date.getHours()) + ':' +
			makeTwoDigits(date.getMinutes())+'\n';
	socket.end(result);
}).listen(8000);
