import {createMuiTheme} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";

// Create a theme instance.
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
		},
		grey: {
			"50": "#8491A0",
			"100": "#5B6876",
		},
	},
	overrides: {
		MuiTypography: {
			h1: {
				fontFamily: "San",
				fontSize: "78px",
				fontWeight: 700,
				lineHeight: "93.84px",
			},
			h2: {
				fontFamily: "Sen",
				fontSize: "55px",
				fontWeight: 700,
				lineHeight: "66.17px",
			},
			h3: {
				fontFamily: "Sen",
				fontSize: "24px",
				fontWeight: 700,
				lineHeight: "36px",
			},
			h4: {
				fontFamily: "Sen",
				fontSize: "18px",
				fontWeight: 700,
				lineHeight: "17px",
			},
			h5: {
				fontFamily: "Sen",
				fontSize: "16px",
				fontWeight: 700,
				lineHeight: "24px",
			},
			body1: {
				fontFamily: "Sen",
				fontSize: "18px",
				fontWeight: 400,
				lineHeight: "27px",
			},
			body2: {
				fontFamily: "Sen",
				fontSize: "16px",
				fontWeight: 400,
				lineHeight: "24px",
			},
			button: {
				fontFamily: "Sen",
				fontSize: "18px",
				fontWeight: 700,
				lineHeight: "27px",
			},
			overline: {
				fontFamily: "Sen",
				fontSize: "16px",
				fontWeight: 700,
				lineHeight: "24px",
			},
		},
	},
});

export default theme;
