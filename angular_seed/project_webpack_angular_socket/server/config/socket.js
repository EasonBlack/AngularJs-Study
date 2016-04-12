

module.exports = function (io) {
    io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('pay',function(data){
            socket.broadcast.emit('confirm', data);
            socket.emit('confirm', data);
        });
    });
}


