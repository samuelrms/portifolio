import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#72FFFF9f",
      dark: blue[600],
      light: "#72FF4F",
    },
    secondary: {
      main: "#1d1d1d",
      dark: "#1A3810",
      light: "#E354CF",
    },
    background: {
      paper: " #72FF4F0D",
      default: "#0A4D9E",
    },
    common: {
      black: "#13529b",
    },
  },
  typography: {
    allVariants: {
      color: "#72FF4F",
    },
  },
});
