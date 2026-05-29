import { createContext, useContext, useMemo, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const ThemeContext = createContext();

export function ThemeProviderContext({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",

        primary: {
          main: darkMode ? "#60a5fa" : "#2563eb",
        },

        secondary: {
          main: darkMode ? "#f472b6" : "#db2777",
        },

        background: {
          default: darkMode ? "#0f172a" : "#f8fafc",

          paper: darkMode ? "#1e293b" : "#ffffff",
        },

        text: {
          primary: darkMode ? "#f8fafc" : "#0f172a",

          secondary: darkMode ? "#cbd5e1" : "#475569",
        },
      },
    });
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
