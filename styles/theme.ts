import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const fontFamily = ["Sen-Regular", "Helvetica", "sans-serif"].join(",");

// Create a theme instance.
const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5221E6",
      light: "#181823",
      dark: "#000000",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    success: {
      main: "#3CC74E",
    },
    text: {
      primary: "#ffffff",
      secondary: "#8491A0",
    },
    grey: {
      "50": "#8491A0",
      "100": "#5B6876",
    },
  },
  typography: {
    fontFamily: fontFamily,
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: "Sen-Regular",
        fontSize: "78px",
        fontWeight: 700,
        lineHeight: "93.84px",
        [defaultTheme.breakpoints.down("sm")]: {
          fontSize: "32px",
          lineHeight: "38.5px",
        },
      },
      h2: {
        fontFamily: "Sen-Regular",
        fontSize: "55px",
        fontWeight: 700,
        lineHeight: "66.17px",
        [defaultTheme.breakpoints.down("sm")]: {
          fontSize: "32px",
          lineHeight: "38.5px",
        },
      },
      h3: {
        fontFamily: "Sen-Regular",
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "36px",
      },
      h4: {
        fontFamily: "Sen-Regular",
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "27px",
      },
      h5: {
        fontFamily: "Sen-Regular",
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: "24px",
      },
      body1: {
        fontFamily: "Sen-Regular",
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: "27px",
      },
      body2: {
        fontFamily: "Sen-Regular",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
      },
      button: {
        fontFamily: "Sen-Regular",
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "27px",
      },
      overline: {
        fontFamily: "Sen-Regular",
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: "24px",
      },
    },
  },
});

export default theme;
