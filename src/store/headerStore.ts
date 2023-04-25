import { create } from "zustand";

interface IHeaderStore {
  isScrolled: boolean;
  update: (scroll: boolean) => void;
}

export const headerStore = create<IHeaderStore>((set) => ({
  isScrolled: false,
  update: (scroll) => set({ isScrolled: scroll }),
}));
