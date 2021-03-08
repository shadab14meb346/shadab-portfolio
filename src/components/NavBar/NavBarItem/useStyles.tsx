import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	navbarItem: {
		height: 88,
		display: "flex",
		alignItems: "center",
		"&:hover": {
			cursor: "pointer",
		},
		paddingRight: theme.spacing(3),
		paddingLeft: theme.spacing(3),
	},
	activeNavBarItem: {
		background: theme.palette.primary.main,
		fontWeight: 700,
	},
}));
