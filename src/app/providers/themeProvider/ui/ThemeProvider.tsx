import { useMemo, useState } from "react";
import { ThemeContext } from "../lib/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "../lib/ThemeContext";
import { Theme } from "../lib/ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

  const [theme, setTheme] = useState(defaultTheme);

  const defaultContextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
      <ThemeContext.Provider value={defaultContextValue}>
          {children}
      </ThemeContext.Provider>
  );
};

export default ThemeProvider;
