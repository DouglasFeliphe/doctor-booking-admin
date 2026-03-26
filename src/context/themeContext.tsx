// src/context/ThemeContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: ThemeTypes;
  toggleTheme: () => void;
}

type ThemeTypes = 'light' | 'dark';

const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize state based on localStorage or system preference
  const [theme, setTheme] = useState<ThemeTypes>(
    localStorage.theme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'),
  );

  // Deve mostrar: #f8f9fa (light) ou #0f172a (dark)
  useEffect(() => {
    // Update the <html> element data-theme attribute and localStorage whenever the theme changes
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.theme = theme;
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
  if (!useContext(ThemeContext)) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return useContext(ThemeContext);
}
