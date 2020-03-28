import { createMuiTheme } from "@material-ui/core";
import { acuminRegular } from "./fonts";

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Acumin Pro",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: '#38795D',
    },
    secondary: {
      main: '#F4821E',
    },
    background: {
      default: '#EDF6FE',
    },
    text: {
      primary: '#F4821E',
      secondary: '#ffffff',
      hint: '#000000',
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [acuminRegular],
      },
    },
    MuiButton: {
      root: {
        borderRadius: '2rem',
        padding: '0.5rem 2rem',
        textTransform: 'none',
      }
    }
  },
});
