import React, { createContext, useCallback, useMemo, useContext } from "react";
import { ThemeProvider, Box } from "@mui/material";
import { DarkTheme, LightTheme } from "../styles/themes/";
import { Children } from "../interface";
import { usePersistedState } from "../hooks";

interface ThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<Children> = ({ children }) => {
  const [themeName, setThemeName] = usePersistedState<"light" | "dark">(
    "@theme_local",
    "light",
  );

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light",
    );
  }, [setThemeName]);

  const theme = useMemo(() => {
    if (themeName === "dark") {
      return DarkTheme;
    }
    return LightTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
