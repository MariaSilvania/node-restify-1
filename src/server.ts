import * as restify from 'restify';

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

function respond(req, res, next) {
  res.send('hello 6 ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(server_port, server_ip_address, function() {
  console.log( "Listening on " + server_ip_address + ", port " + server_port);
});