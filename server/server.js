const express = require('express');
const http = require('http');
const {mongoose} = require('./../mongoose/mongoose.js');
const app = express();
const socketio = require('socket.io');
const server = http.createServer(app);
const port = 3000;

const io = socketio(server);
let count = 0;
app.use(express.static('public'));

var suckit;

io.on('connection', (socket) => {
  console.log('New web connection');
  socket.emit('counterUpdated', count);

  socket.on("object", (data) => {
    console.log(data);
  })


  socket.on('increment', () => {
    count++;
    socket.emit('counterUpdated', count)


  });

});



app.get('/' ,(req ,res) => {

});



server.listen(port, () => {
  console.log("server starting on Port: " + port);
});
