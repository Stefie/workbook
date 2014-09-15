var fs = require('fs'),
		path = require('path');
		
module.exports = function (mydir, extension, callback){ 
		this.callback = function(){
			fs.readdir(this.mydir, function(err, data){
				if (err) throw err;
				for(var i=0; i< data.length; i++){
					if(path.extname(data[i]).replace('.', "") === this.extension){
						console.log(data[i]);
					}
				}
			});
		}
}
var mymodule = require('./mymodule.js');
