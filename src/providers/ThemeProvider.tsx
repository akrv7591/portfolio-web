import React, { createContext, useContext, useState } from "react";

export type Themes = "light" | "dark";
type ThemeProps = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
  toggle: VoidFunction;
};

const ThemeContext = createContext<ThemeProps>({} as ThemeProps);

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const colorScheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<Themes>(
    colorScheme ? (colorScheme as Themes) : "dark",
  );
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  React.useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#1a1b1e": "#fff"
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
