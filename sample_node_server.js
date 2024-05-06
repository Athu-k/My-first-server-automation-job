var http = require('http')

var handle = function(req,res){
	console.log("url", req.url)
	console.log("Reached here")
	if (req.url == "/doc") {
		res.end("Here are your documents")
	} else {
       		res.end('Hello World');
	}
}


http.createServer(handle).listen(1090)
