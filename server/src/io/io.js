import { Server } from 'socket.io';

export function registerSocketServer(server) {
  let io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('a user conencted');
    console.log(socket.id);
  });
}
