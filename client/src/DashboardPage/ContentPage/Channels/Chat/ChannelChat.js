import Messages from './Messages';
import NewMessageInput from './NewMessageInput';

const ChannelChat = () => {
  return (
    <div className="flex flex-col items-center gap-2 bg-slate-300 lg:w-[300px] md:mx-0 p-6 pt-4 w-full h-screen">
      <h2 className="font-bold text-center text-lg">Chat</h2>
      <Messages />
      <NewMessageInput />
    </div>
  );
};

export default ChannelChat;
