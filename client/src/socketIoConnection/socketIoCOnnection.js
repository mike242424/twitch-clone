import io from 'socket.io-client';

export function connectToSocketServer() {
  let socket = io('http://localhost:3002');

  socket.on('connect', () => {
    console.log('Connected to Socket.IO server');
    console.log('Socket ID:', socket.id);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from Socket.IO server');
  });
}
