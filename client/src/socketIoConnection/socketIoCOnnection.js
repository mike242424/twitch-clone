import io from 'socket.io-client';

let socket;

export function connectToSocketServer() {
  socket = io('http://localhost:3002');

  socket.on('connect', () => {
    console.log('Connected to Socket.io server');
    console.log('Socket ID:', socket.id);
  });

  socket.on('chatHistory', (data) => {
    console.log('Received chat history:', data);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from Socket.IO server');
  });
}

export function getChatHistory(channelId) {
  if (socket && socket.connected) {
    socket.emit('chatHistory', channelId);
  } else {
    console.error('Socket is not connected');
  }
}
