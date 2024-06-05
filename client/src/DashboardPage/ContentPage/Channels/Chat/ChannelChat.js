import Messages from './Messages';
import NewMessageInput from './NewMessageInput';
import { useChatHistory } from '../../../../hooks/useChatHistory.js';

const ChannelChat = ({ channel }) => {
  const { messages, loading, sendMessage } = useChatHistory(channel?._id);

  if (loading) {
    return <div>Loading chat history...</div>;
  }

  return (
    <div className="flex flex-col items-center gap-2 bg-slate-400 lg:w-[300px] md:mx-0 p-6 pt-4 w-full h-screen">
      <h2 className="font-bold text-center text-lg">Chat</h2>
      <Messages messages={messages} />
      <NewMessageInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChannelChat;
