var fs = require('fs'),
		myDoc = fs.readFileSync(process.argv[2]),
 		string = myDoc.toString(),
		stringArray = string.split('\n');

console.log(stringArray.length -1);