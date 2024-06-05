import { useEffect, useState } from 'react';
import { useChatStore } from '../store/chatStore';
import {
  getChatHistory,
  leaveChat,
  sendChatMessage,
} from '../socketIoConnection/socketIoCOnnection';
import { useUserDetails } from './useUserDetails';

export function useChatHistory(channelId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { chatHistory, setChatHistory } = useChatStore();
  const { isLoggedIn, username } = useUserDetails();

  useEffect(() => {
    setLoading(true);
    setError('');
    try {
      const fetchChatHistory = async () => {
        const history = await getChatHistory(channelId);
        setChatHistory(channelId, history);
      };
      fetchChatHistory();
    } catch (err) {
      console.log(err);
      setError('Error fetching chat history.');
    } finally {
      setLoading(false);

      return () => {
        leaveChat(channelId);
      };
    }
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
    messages: chatHistory?.channelId === channelId ? chatHistory?.messages : [],
    loading,
    error,
    sendMessage,
  };
}
