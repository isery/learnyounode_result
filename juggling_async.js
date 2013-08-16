var http = require('http');
var bl = require('bl');
var async = require('async');
var urls = process.argv.slice(2,2+5);

async.timesSeries(urls.length, function(n, next){
		http.get(urls[n], function(response) {
			response.pipe(bl(function (error, data) {
				next(error, data.toString());
			}));
		});
}, function(error, data) {
	for(var i in data) {
		console.log(data[i]);
	}
});

