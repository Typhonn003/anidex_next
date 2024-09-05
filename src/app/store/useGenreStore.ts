import { create } from "zustand";

interface useGenreStoreProps {
  genreId: number | null;
  genreName: string | null;
  currentPage: number;
  lastPage: number;
  setGenreId: (value: number) => void;
  setGenreName: (value: string) => void;
  setCurrentPage: (value: number) => void;
  setLastPage: (value: number) => void;
}

export const useGenreStore = create<useGenreStoreProps>((set) => ({
  genreId: null,
  genreName: null,
  currentPage: 1,
  lastPage: 0,
  setGenreId: (value) => set({ genreId: value }),
  setGenreName: (value) => set({ genreName: value }),
  setCurrentPage: (value) => set({ currentPage: value }),
  setLastPage: (value) => set({ lastPage: value }),
}));
