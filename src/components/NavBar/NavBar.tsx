import {useState} from "react";
import {Typography} from "@material-ui/core";
import Image from "next/image";

import NavBarItem from "./NavBarItem/NavBarItem";
import {useStyles} from "./useStyles";
import {NavBarItemsType} from "./types";
const NavBar = () => {
	const classes = useStyles();
	const [activeItem, setActiveItem] = useState<NavBarItemsType>(
		NavBarItemsType.EXPERIENCE
	);
	return (
		<nav className={classes.navbar}>
			<section>
				<Typography variant="h3">Shadab.Alam</Typography>
			</section>
			<div className={classes.hiddenUpSM}>
				<Image width={24} height={24} src="/menu_burger_icon.svg" />
			</div>
			<section className={classes.navBarItemsSection}>
				<NavBarItem
					title="Experience"
					isActive={activeItem === NavBarItemsType.EXPERIENCE}
					onClick={() => setActiveItem(NavBarItemsType.EXPERIENCE)}
				/>
				<NavBarItem
					title="Work"
					isActive={activeItem === NavBarItemsType.WORK}
					onClick={() => setActiveItem(NavBarItemsType.WORK)}
				/>
				<NavBarItem
					title="Skills"
					isActive={activeItem === NavBarItemsType.SKILLS}
					onClick={() => setActiveItem(NavBarItemsType.SKILLS)}
				/>
				<NavBarItem
					title="Contact"
					isActive={activeItem === NavBarItemsType.CONTACT}
					onClick={() => setActiveItem(NavBarItemsType.CONTACT)}
				/>
			</section>
		</nav>
	);
};

export default NavBar;
