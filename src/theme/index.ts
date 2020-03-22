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
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [acuminRegular],
      },
    },
  },
});
