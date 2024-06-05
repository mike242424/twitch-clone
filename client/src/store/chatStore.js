import { create } from 'zustand';

export const useChatStore = create((set) => ({
  chatHistory: {
    channelId: null,
    messages: [],
  },
  setChatHistory: (chatHistory) => set({ chatHistory }),
}));
