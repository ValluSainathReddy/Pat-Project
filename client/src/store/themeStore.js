import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'dark',
      accent: 'cyan',
      setTheme: (theme) => set({ theme }),
      setAccent: (accent) => set({ accent })
    }),
    {
      name: 'portfolio-theme',
      partialize: (state) => ({ theme: state.theme, accent: state.accent })
    }
  )
);
