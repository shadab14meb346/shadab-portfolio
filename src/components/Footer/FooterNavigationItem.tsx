import {Link, Typography} from "@material-ui/core";

import {useStyles} from "./useStyles";

const FooterNavigationItem = ({children}) => {
	const classes = useStyles();
	return (
		<Typography variant="body2" className={classes.footerNavigationItem}>
			{children}
		</Typography>
	);
};

export default FooterNavigationItem;
