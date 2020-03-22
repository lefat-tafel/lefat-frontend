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
      main: '#f4821e',
    },
    secondary: {
      main: '#38795d',
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [acuminRegular],
      },
    },
  },
});
