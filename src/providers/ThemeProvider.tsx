import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";

export type Themes = "light" | "dark" | "system" | undefined;
type ThemeProps = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
};

const ThemeContext = createContext<ThemeProps>({} as ThemeProps);

const getTheme = () => {
  if (!("theme" in localStorage)) {
    return "system";
  } else if (localStorage.theme === "dark") {
    return "dark";
  } else {
    return "light";
  }
};

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState<Themes>(getTheme());

  useLayoutEffect(() => {
    if (theme === "system") {
      localStorage.removeItem("theme");
    } else {
      theme && localStorage.setItem("theme", theme);
    }
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme: theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
