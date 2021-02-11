import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
export let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#421b9b",
    },
    secondary: {
      main: "#a06ee1",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

theme = responsiveFontSizes(theme);
