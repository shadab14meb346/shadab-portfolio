import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	container: {
		background: theme.palette.primary.dark,
		padding: theme.spacing(9),
		paddingTop: theme.spacing(15),
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(2),
			paddingTop: theme.spacing(0),
		},
	},
	title: {
		maxWidth: 690,
	},
	content: {
		display: "flex",
		justifyContent: "space-between",
		flexFlow: "wrap",
	},
	customFontSize: {
		fontSize: "117px",
		lineHeight: "140px",
	},
	workExperienceCardContainer: {
		maxWidth: 368,
	},
}));
