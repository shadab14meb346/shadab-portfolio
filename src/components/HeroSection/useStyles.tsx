import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(10),
		paddingBottom: theme.spacing(5),
		background: theme.palette.primary.light,
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			background: theme.palette.primary.dark,
		},
	},
	content: {
		padding: theme.spacing(5),
		[theme.breakpoints.down("sm")]: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2),
		},
	},
	customFontColor: {
		color: "rgb(117,117,121)",
	},
	about: {
		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(1.5),
		},
	},
}));
