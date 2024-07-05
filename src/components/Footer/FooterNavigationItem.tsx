import { Link, Typography } from "@material-ui/core";

import { useStyles } from "./useStyles";

const FooterNavigationItem = ({ children, onClick }) => {
  const classes = useStyles();
  return (
    <Typography
      variant="body2"
      className={classes.footerNavigationItem}
      onClick={onClick}
    >
      {children}
    </Typography>
  );
};

export default FooterNavigationItem;
