var http = require('http');

http.createServer(function(req, res){ //http require request made
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('This would be the response to the http request.');
}).listen(2003);