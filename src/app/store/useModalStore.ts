import { create } from "zustand";

interface useModalProps {
  genreModal: boolean;
  setGenreModal: (value: boolean) => void;
}

export const useModalStore = create<useModalProps>((set) => ({
  genreModal: false,
  setGenreModal: (value) => set({ genreModal: value }),
}));
