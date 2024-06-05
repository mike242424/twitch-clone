import { Server } from 'socket.io';

export function registerSocketServer(server) {
  let io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    socket.on('chatHistory', (channelId) => {
      emitChatHistory(socket, channelId);
    });
  });
}
