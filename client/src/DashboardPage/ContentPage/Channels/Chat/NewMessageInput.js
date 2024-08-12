import { useState } from 'react';

const NewMessageInput = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  function handleSendMessage() {
    if (message.length > 0) {
      sendMessage(message);
    }
    setMessage('');
  }

  function handleEnterPress(e) {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  }
  return (
    <div className="flex lg:flex-col gap-2 w-full pt-4">
      <input
        className="p-2 rounded w-full"
        type="text"
        placeholder="Send a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <button
        onClick={handleSendMessage}
        className="bg-violet-900 hover:bg-violet-800 text-white p-2 rounded"
      >
        Send
      </button>
    </div>
  );
};

export default NewMessageInput;
