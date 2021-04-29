import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	drawerPaper: {
		width: "50%",
		background: theme.palette.primary.light,
		height: "40%",
	},
	content: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	paperAnchorRight: {
		top: 72,
	},
}));
