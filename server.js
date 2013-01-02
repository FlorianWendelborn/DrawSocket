/* ┌─────────────────────────────────────────────────┐ */
/* │ DrawSocket version 0.1a                         │ */
/* ├─────────────────────────────────────────────────┤ */
/* │ Copyright © 30.12.2012 by Florian Wendelborn    │ */
/* ├─────────────────────────────────────────────────┤ */
/* │ Licensed under the CC-BY-NC license version 3.0 │ */
/* └─────────────────────────────────────────────────┘ */

var http = require('http');
var io = require('socket.io');
var storage = new Array();

//Socket.IO
socket = io.listen(8080);

socket.set('log level', 0);

socket.sockets.on('connection', function(connection){
	console.log("User joined Server");
	connection.emit('init', storage);
	connection.on('data', function (points, options){
		console.log(points);
		console.log(options);
		store(points, options);
		connection.broadcast.emit('data', points, options);
	});
	connection.on('reset', function (password) {
		if (password == 'lol') {
			console.log('reset');
			storage = new Array();
			socket.sockets.emit('reset');
		}
	});
	connection.on('disconnect', function (){
		console.log("Disconnected");
	});
});

function store (points, options) {
	storage.push([points, options]);
}