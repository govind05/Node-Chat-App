let socket = io();

socket.on('connect', function() {
  console.log('Connected to server.');

  socket.emit('createMessage', {
    from: 'Lalit',
    text: 'hey'
  });
});

socket.on('newMessage', function(newMessage) {
  console.log('Got a new message: ', newMessage);
});

socket.on('disconnect', function() {
  console.log('Disconnect from server.');
});