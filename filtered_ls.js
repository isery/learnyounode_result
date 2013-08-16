var fs = require('fs');
var path = process.argv[2];
var extension =process.argv[3];
var regex = new RegExp('\\.' + extension);
var data = fs.readdir(path, function(error, list) {
	for(var i = 0; i<list.length; i++) {
		if(list[i].match(regex)) {
			console.log(list[i]);
		}
	}
});