import Channel from '../../models/Channel';

export async function chatHistory(socket, channelId) {
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
