const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('../../../../etc/ssl/private/nodejs-selfsigned.key'),
  cert: fs.readFileSync('../../../../etc/ssl/certs/nodejs-selfsigned.crt')
};

https.createServer(options, (req, res) => {
	console.log("https server created");
  res.writeHead(200);
  res.end('hello world\n');
}).listen(3000);