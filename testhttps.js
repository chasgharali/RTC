

var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('../ssl/key.pem'),
  cert: fs.readFileSync('../ssl/cert.pem')
};

var a = https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(3000);

/*const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('../../../../etc/ssl/selfsigned/server-selfsigned.key'),
  cert: fs.readFileSync('../../../../etc/ssl/selfsigned/server-selfsigned.crt'),
    passphrase: 'selfsignedssl'
};

https.createServer(options, (req, res) => {
	console.log("https server created");
  res.writeHead(200);
  res.end('hello world\n');
}).listen(3000);*/