var https = require('https');
var fs = require('fs');

var key = fs.readFileSync('server-key.pem');
var cert = fs.readFileSync('server-cert.pem');

var options = {
    key: key,
    cert: cert
};

https.createServer(options, function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end('Se encuentra navegando de forma segura con HTTPS.');
}).listen(3000);