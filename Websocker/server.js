const app = require('express')();
const http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('connection');
  socket.on('disconnect', function(){
    console.log('disconnect');
  });
  socket.on('chat', (msg) => {
    console.log(msg);
  });
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});
