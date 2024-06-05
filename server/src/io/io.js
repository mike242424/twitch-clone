import { Server } from 'socket.io';
import { emitChatHistory, emitChatMessage } from './events/chatHistory.js';

export function registerSocketServer(server) {
  let io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    socket.on('chatHistory', (channelId) => {
      socket.join(channelId);
      emitChatHistory(socket, channelId);
    });

    socket.on('chatMessage', (data) => {
      emitChatMessage(io, { toChannel: data.toChannel, message: data.message });
    });

    socket.on('leaveChat', (channelId) => {
      socket.leave(channelId);
    });
  });
}
