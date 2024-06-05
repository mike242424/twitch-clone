import Channel from '../../models/Channel.js';
import Message from '../../models/Message.js';

export async function emitChatHistory(socket, channelId) {
  try {
    const channel = await Channel.findById(channelId).populate('messages');

    if (channel) {
      return socket.emit('chatHistory', {
        channelId,
        messages: channel.messages.map((message) => ({
          author: message.author,
          content: message.content,
        })),
      });
    }

    socket.emit('chatHistory', {
      error: 'No channel found',
    });
  } catch (err) {
    console.log(err);
    socket.emit('chatHistory', {
      error: err,
    });
  }
}

export async function emitChatMessage(io, messageData) {
  try {
    const channel = await Channel.findById(messageData.toChannel);

    if (channel) {
      const newMessage = new Message({
        content: messageData?.message?.content,
        author: messageData?.message?.author,
        date: new Date(),
      });

      await newMessage.save();

      channel.messages.push(newMessage._id);

      await channel.save();

      io.to(messageData.toChannel).emit('chatMessage', newMessage);
    }
  } catch (err) {
    console.log(err);
  }
}
