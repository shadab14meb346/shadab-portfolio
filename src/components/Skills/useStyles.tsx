import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	content: {
		display: "flex",
		justifyContent: "space-between",
		flexWrap: "wrap",
	},
	skillItemContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		margin: theme.spacing(2),
	},
}));
