import { create } from "zustand";

type Store = {
  started: boolean;
  setStarted: (started: boolean) => void;

  currentCard: number;
  nextCard: () => void;
  prevCard: () => void;

  flippedCardNumber: number;
  setFlippedCardNumber: (num: number) => void;
};

export const useStore = create<Store>((set) => ({
  started: false,
  setStarted: (started) => {
    set({ started });
  },

  currentCard: 1,
  nextCard: () => {
    set((state) => ({ currentCard: state.currentCard + 1 }));
  },
  prevCard: () => {
    set((state) => ({ currentCard: state.currentCard - 1 }));
  },

  flippedCardNumber: 0,
  setFlippedCardNumber: (num) => {
    set({ flippedCardNumber: num });
  },
}));
