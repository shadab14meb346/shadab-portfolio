import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	content: {
		display: "flex",
		flexWrap: "wrap",
	},
	skillItemContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginRight: theme.spacing(4),
		marginBottom: theme.spacing(4),
	},
}));
