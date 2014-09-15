var fs = require('fs'),
		path = require('path');
		
module.exports = function (mydir, extension, callback){ 
	var files = [];
	fs.readdir(mydir, function(err, data){
		if (err) return callback(err);
		for(var i=0; i< data.length; i++){
			if(path.extname(data[i]).replace('.', "") === extension){
				files.push(data[i]);
			}
		}
		callback(null, files);
	});
}