import { Typography } from "@material-ui/core";
import classNames from "classnames";

import { useStyles } from "./useStyles";

interface INavBarProps {
  title: string;
  isActive: boolean;
  onClick: any;
}
const NavBarItem = ({ title, isActive, onClick }: INavBarProps) => {
  const classes = useStyles();
  return (
    <div
      onClick={onClick}
      className={classNames(
        classes.navbarItem,
        isActive ? classes.activeNavBarItem : " ",
      )}
    >
      <Typography variant={isActive ? "h5" : "body2"}>{title}</Typography>
    </div>
  );
};

export default NavBarItem;
