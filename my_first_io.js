var fs = require('fs');
var path = process.argv[2];

var data = fs.readFileSync(path, 'utf8');
lines = data.split('\n');
console.log(lines.length);