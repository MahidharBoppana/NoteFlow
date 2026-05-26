import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#6366f1",
    },

    secondary: {
      main: "#ec4899",
    },

    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },

    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
    },
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;
