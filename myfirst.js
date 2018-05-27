var http=require('http');
var url=require('url');
var uc=require('upper-case');
http.createServer(function (req,res) {

	res.writeHead(200,{'Content-Type':'text/html'});
	res.write(uc('Hello World!'));
	// var q=url.parse(req.url,true).query;
	// var text=q.name+" "+q.age;
	// res.write(text);
	res.end();
	// body...
}).listen(8080);