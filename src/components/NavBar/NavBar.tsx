import { Hidden, Typography } from "@material-ui/core";

import { useStyles } from "./useStyles";
import { NavBarItemsType } from "./types";
import Sidebar from "../Sidebar";
import NavbarItems from "./NavBarItems";

interface INavBarProps {
  scrollTo: (itemName: NavBarItemsType) => void;
  activeNavBarItem: NavBarItemsType;
}

const NavBar = ({ scrollTo, activeNavBarItem }: INavBarProps) => {
  const classes = useStyles();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav className={classes.navbar}>
      <section className={classes.cursorPointer} onClick={handleClick}>
        <Typography variant="h3">Md Shadab Alam</Typography>
      </section>
      <Hidden smUp>
        <Sidebar scrollTo={scrollTo} activeNavBarItem={activeNavBarItem} />
      </Hidden>
      <Hidden smDown>
        <NavbarItems scrollTo={scrollTo} activeNavBarItem={activeNavBarItem} />
      </Hidden>
    </nav>
  );
};

export default NavBar;
