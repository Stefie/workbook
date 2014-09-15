var fs = require('fs');
		fs.readFile(process.argv[2], 'utf8', function(err, data){
			if (err) throw err;
				stringArray = data.split('\n');
			  console.log(stringArray.length -1);
		});
		
//console.log(stringArray.length);