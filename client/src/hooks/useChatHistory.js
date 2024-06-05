import { useEffect, useState } from 'react';
import { getChatHistory } from '../socketIoConnection/socketIoCOnnection';

export async function useChatHistory(channelId) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChatHistory() {
      setLoading(true);
      try {
        const history = await getChatHistory(channelId);
        setMessages(history);
      } catch (error) {
        console.error('Error fetching chat history:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchChatHistory();
  }, [channelId]);

  return {
    messages,
    loading,
    sendMessage: () => {},
  };
}
