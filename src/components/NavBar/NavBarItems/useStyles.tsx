import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	navBarItemsSection: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		minWidth: "30%",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			alignItems: "center",
		},
	},
}));
