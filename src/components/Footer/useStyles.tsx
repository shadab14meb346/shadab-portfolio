import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	container: {
		background: theme.palette.primary.light,
		padding: theme.spacing(8, 7, 8),
	},
	copyRight: {
		marginTop: theme.spacing(10),
	},
	footerNavigationItem: {
		paddingTop: theme.spacing(1.5),
		paddingBottom: theme.spacing(1.5),
	},
}));
