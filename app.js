var port = 8089,
	WebSocketServer = require('uws').Server,
	wss = new WebSocketServer({ port: port });

console.log('listening on port: ' + port);

wss.on('connection', function connection(ws) {

	ws.on('message', function(message) {
		//wss.broadcast(message);
		//console.log('message: ' + message);
		//ws.send('echo: ' + message);
		wss.clients.forEach(function(client){
			if (client !== ws) client.send(message);
		});

	});

	console.log('new client connected!');
	ws.send('connected!');

});
