import React, { useEffect, useRef } from 'react';
import Message from './Message';

const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white p-4 w-full mt-2 h-96 overflow-y-auto">
      {messages?.map((message) => (
        <Message
          key={message._id}
          author={message.author}
          content={message.content}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
