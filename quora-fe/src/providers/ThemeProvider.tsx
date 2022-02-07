import React, { createContext, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

type ThemeContextProps = {
  theme?: string | (() => void);
  toggleTheme: string | (() => void);
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);
const isBrowser = typeof window !== "undefined";

export const ThemeProvider = ({ children }: any) => {
  const [theme, toggleTheme] = useDarkMode();

  useEffect(() => {
    if (
      (isBrowser && window.localStorage.theme === "dark") ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggleTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
