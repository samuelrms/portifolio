import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#DCE35F",
      dark: "#1A3810",
      light: "#E354CF",
      contrastText: "#fff",
    },
    secondary: {
      main: "#DCE35F",
      dark: "#1A3810",
      light: "#E354CF",
      contrastText: "#fff",
    },
    background: {
      paper: "#72FF4F0D",
      default: "#090E16",
    },
    common: {
      black: "#192526",
    },
  },
  typography: {
    allVariants: {
      color: "#72FF4F",
    },
  },
});
