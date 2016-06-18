var fs = require('fs')
module.exports = function(dir,ext,callback) {
var result = []
fs.readdir(dir,function(err,files) {
	if (err){
		callback(err,null)
}
	else{
        	for (var file in files){
                	var fileSplit = files[file].split('.')
                	if (fileSplit[1] === ext){
                        	result.push(files[file])
               	 	}
       		 }
		callback(null,result)
	}
})


}
