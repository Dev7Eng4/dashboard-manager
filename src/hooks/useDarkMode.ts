import { useEffect, useState } from 'react';

export type Theme = 'dark' | 'light' | '';

export const useDarkMode = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>('');

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme;
    setTheme(localTheme || 'light');
  }, []);

  const setMode = (mode: Theme) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    setMode(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, themeToggler];
};
