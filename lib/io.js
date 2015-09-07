var lib = require('../lib/lib.js');
var models = require('../models');

module.exports = function(io){
	io.on('connection', function(socket){
		console.log('connected io');
		socket.on('messages', function(msg){
			lib.messageSummary(msg.store, function(err, data){
				if(err){
					socket.emit('error', error);
				}else{
					socket.emit('messages', data);
				}
			});
		});
	});
}
