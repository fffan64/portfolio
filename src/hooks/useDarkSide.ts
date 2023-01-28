import { useEffect, useState } from 'react';

export default function useDarkSide() {
  const [theme, setTheme] = useState<string | null>(null);

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'dark'); // default to dark
  }, []);

  useEffect(() => {
    if (theme !== null) {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, colorTheme]);

  return { colorTheme, setTheme };
}
