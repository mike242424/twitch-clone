import Message from './Message';

const messages = [
  { _id: 1, author: 'Mike', content: 'Hello there' },
  {
    _id: 2,
    author: 'Mike',
    content: 'Hello there Hello there Hello there Hello there',
  },
  { _id: 3, author: 'Mike', content: 'Hello there' },
  { _id: 4, author: 'Mike', content: 'Hello there' },
  { _id: 5, author: 'Mike', content: 'Hello there' },
];

const Messages = () => {
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
