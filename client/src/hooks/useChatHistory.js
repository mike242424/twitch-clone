import { useEffect, useState } from 'react';
import {
  getChatHistory,
  leaveChat,
  sendChatMessage,
} from '../socketIoConnection/socketIoCOnnection';
import { useUserDetails } from './useUserDetails';

export function useChatHistory(channelId) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { isLoggedIn, username } = useUserDetails();

  useEffect(() => {
    function fetchChatHistory() {
      setLoading(true);
      setError('');
      try {
        const history = getChatHistory(channelId);
        setMessages(history);
      } catch (err) {
        console.log(err);
        setError('Error fetching chat history.');
      } finally {
        setLoading(false);
      }

      return () => {
        leaveChat(channelId);
      };
    }

    fetchChatHistory();
  }, [channelId]);

  function sendMessage(message) {
    try {
      setLoading(true);
      setError('');
      sendChatMessage(channelId, {
        author: isLoggedIn ? username : 'Guest',
        content: message,
      });
    } catch (err) {
      console.log(err);
      setError('Error sending message.');
    } finally {
      setLoading(false);
    }
  }

  return {
    messages,
    loading,
    error,
    sendMessage,
  };
}
