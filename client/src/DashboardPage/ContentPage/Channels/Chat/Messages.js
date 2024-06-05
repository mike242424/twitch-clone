import Message from './Message';

const Messages = ({ messages }) => {
  return (
    <div className="bg-white p-4 w-full mt-2 h-96">
      {messages?.map((message) => (
        <Message
          key={message._id}
          author={message.author}
          content={message.content}
        />
      ))}
    </div>
  );
};

export default Messages;
