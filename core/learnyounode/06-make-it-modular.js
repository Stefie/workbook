var mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function(err, res){
	if(err) throw err;
	
	console.log(res.join('\n'));
});
