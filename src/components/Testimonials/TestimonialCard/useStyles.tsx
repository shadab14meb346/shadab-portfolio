import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		maxWidth: 600,
		minHeight: 400,
		justifyContent: "space-around",
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	customLinkColor: {
		color: theme.palette.text.secondary,
	},
}));
