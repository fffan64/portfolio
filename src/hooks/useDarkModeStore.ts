import { create } from 'zustand';

type DarkModeStore = {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
};

export const useDarkModeStore = create<DarkModeStore>((set) => ({
  isDark: false,
  setIsDark: (val: boolean) => set(() => ({ isDark: val })),
}));
