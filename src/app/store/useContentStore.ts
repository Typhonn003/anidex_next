import { create } from "zustand";

interface useContentProps {
  contentType: string;
  setContentType: (value: string) => void;
}

export const useContentStore = create<useContentProps>((set) => ({
  contentType: "",
  setContentType: (value) => set({ contentType: value }),
}));
