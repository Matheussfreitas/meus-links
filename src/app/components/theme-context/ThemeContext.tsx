"use client"
import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro do ThemeProvider");
  }
  return context;
}

export function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  // detecta preferência do sistema ao carregar
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
    
    const toggleDarkMode = () => {
      console.log("Alterando tema ", !darkMode);
      setDarkMode(!darkMode);
    };

    return (
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <ThemeProvider theme={darkMode? darkTheme : lightTheme}>
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    )
}