var sys = require("sys"),
my_http = require("http");
my_http.createServer(function(request,response){
	console.log("I got kicked");
	response.writeHeader(200, {"Content-Type": "text/plain"});
	response.write("Hey now, World redux");
	response.end();
}).listen(80);
console.log("Server Running on 80");	