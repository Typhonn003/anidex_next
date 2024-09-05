import { create } from "zustand";

interface useSearchStoreProps {
  pendingSearch: string;
  currentSearch: string;
  currentPage: number;
  lastPage: number;
  setPendingSearch: (value: string) => void;
  setCurrentSearch: (value: string) => void;
  setCurrentPage: (value: number) => void;
  setLastPage: (value: number) => void;
  resetSearch: () => void;
}

export const useSearchStore = create<useSearchStoreProps>((set) => ({
  pendingSearch: "",
  currentSearch: "",
  currentPage: 1,
  lastPage: 0,
  setPendingSearch: (value) => set({ pendingSearch: value }),
  setCurrentSearch: (value) => set({ currentSearch: value }),
  setCurrentPage: (value) => set({ currentPage: value }),
  setLastPage: (value) => set({ lastPage: value }),
  resetSearch: () =>
    set({
      pendingSearch: "",
      currentSearch: "",
      currentPage: 1,
      lastPage: 0,
    }),
}));
