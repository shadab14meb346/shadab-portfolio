import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	container: {
		background: theme.palette.primary.dark,
		padding: theme.spacing(9),
		paddingTop: theme.spacing(15),
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(2),
			paddingTop: theme.spacing(0),
			paddingBottom: theme.spacing(8),
		},
	},
}));
