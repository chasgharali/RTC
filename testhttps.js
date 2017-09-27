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


var express = require('express');
var https = require('https');
var fs = require('fs');

var options = {
      ca: fs.readFileSync('../../../../etc/ssl/selfsigned/ca-selfsigned.crt'),
      cert: fs.readFileSync('../../../../etc/ssl/selfsigned/server-selfsigned.crt'),
      key: fs.readFileSync('../../../../etc/ssl/selfsigned/server-selfsigned.key')
};

app = express()

app.get('/', function(req,res) {
        res.send('hello');
});

var server = https.createServer(options, app);

server.listen(3000, function(){
        console.log("server running at https://IP_ADDRESS:3000/")
});