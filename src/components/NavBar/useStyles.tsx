import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	navbar: {
		height: 88,
		background: theme.palette.primary.light,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: theme.spacing(10),
		paddingRight: theme.spacing(10),
	},
	navBarItemsSection: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		// alignSelf: "flex-end",
		minWidth: "30%",
	},
}));
