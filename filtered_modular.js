var fs = require('fs');

module.exports = function(path, extension, callback) {
	var regex = new RegExp('\\.' + extension);
	var filteredList = [];
	fs.readdir(path, function(error, list) {
		if(error) {
			return callback(error,null);
		}
		for(var i = 0; i<list.length; i++) {
			if(list[i].match(regex)) {
				filteredList.push(list[i]);
			}
		}
		return callback(null,filteredList);
	});
};

