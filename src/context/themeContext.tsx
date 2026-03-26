import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface ThemeContextType {
  theme: ThemeTypes;
  toggleTheme: () => void;
}

type ThemeTypes = 'light' | 'dark';

const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeTypes>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue: ThemeContextType = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  if (!useContext(ThemeContext).theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return useContext(ThemeContext);
}

// Helper function to get the initial theme based on localStorage or system preference
function getInitialTheme(): ThemeTypes {
  const saved = localStorage.getItem('theme');

  if (saved === 'dark' || saved === 'light') return saved;

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
}
