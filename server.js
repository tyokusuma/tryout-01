var http = require('http')
var socketio = require('socket.io')


var server = http.Server(app);
var websocket = socketio(server)
server.listen(3000, () => console.log('listening on *:3000'));

var clients = {};
var users = {};

var chatId = 1;

websocket.on('connection', (socket) => {
    clients[socket.id] = socket;
    socket.on('userJoined', (userId) => onUserJoined(userId, socket));
    console.log('user join', onUserJoined);
    socket.on('message', (message) => onMessageReceived(message, socket));
});
