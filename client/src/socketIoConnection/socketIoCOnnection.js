import io from 'socket.io-client';
import { useChatStore } from '../store/chatStore';
import { v4 as uuidv4 } from 'uuid';

let socket;

export function connectToSocketServer() {
  socket = io('http://localhost:3002');

  socket.on('chatHistory', (chatHistory) => {
    const { setChatHistory } = useChatStore.getState();
    setChatHistory(chatHistory);
  });

  socket.on('chatMessage', (newMessage) => {
    const { chatHistory, setChatHistory } = useChatStore.getState();
    const messageId = uuidv4();

    setChatHistory({
      channelId: chatHistory.channelId,
      messages: [
        ...chatHistory.messages,
        {
          author: newMessage.author,
          content: newMessage.content,
          _id: messageId,
        },
      ],
    });
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

export function sendChatMessage(toChannel, messageData) {
  if (socket && socket.connected) {
    socket.emit('chatMessage', {
      toChannel,
      message: messageData,
    });
  } else {
    console.error('Socket is not connected');
  }
}

export function leaveChat(channelId) {
  if (socket && socket.connected) {
    socket.emit('leaveChat', channelId);
  } else {
    console.error('Socket is not connected');
  }
}
