import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		maxWidth: 360,
		maxHeight: 400,
	},
}));
