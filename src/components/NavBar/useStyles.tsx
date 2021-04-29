import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	navbar: {
		position: "fixed",
		width: "100%",
		zIndex: 1,
		height: 88,
		background: theme.palette.primary.light,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: theme.spacing(10),
		paddingRight: theme.spacing(10),
		[theme.breakpoints.down("sm")]: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2),
			height: 72,
		},
	},
	cursorPointer: {
		cursor: "pointer",
	},
}));
