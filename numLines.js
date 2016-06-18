var fs = require('fs');

var content = fs.readFileSync(process.argv[2]);
var strContent = content.toString();

var splitString = strContent.split('\n');
console.log(splitString.length -1)

