var path = process.argv[2];
var extension =process.argv[3];
var getFilteredList = require('./filtered_modular');

getFilteredList(path, extension, function(error,data) {
	if(error) return console.error(error);
	 for(var i = 0; i<data.length; i++) {
		 console.log(data[i]);
	 }
});