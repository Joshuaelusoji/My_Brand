import { createContext, useContext, useEffect, useState } from "react";
import { themes } from "../config/themes";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const currentTheme = themes[theme];

    if (!currentTheme) return;

    Object.entries(currentTheme.colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(
        `--${key}`,
        value
      );
    });
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}