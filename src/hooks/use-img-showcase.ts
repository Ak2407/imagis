import { create } from "zustand";

type ImageShowcaseStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useImageShowcase = create<ImageShowcaseStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
