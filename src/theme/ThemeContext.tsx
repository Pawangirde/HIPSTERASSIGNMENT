import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeType = "theme1" | "theme2" | "theme3";

const ThemeContext = createContext<{
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}>({
  theme: "theme1",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("theme1");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as ThemeType;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// 
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
