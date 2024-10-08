import { create } from "zustand";

type ImgShowcaseStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useImgShowcaseStore = create<ImgShowcaseStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
