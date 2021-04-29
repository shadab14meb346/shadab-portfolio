import {useState, useEffect} from "react";
import {Typography} from "@material-ui/core";
import Image from "next/image";

import NavBarItem from "./NavBarItem/NavBarItem";
import {useStyles} from "./useStyles";
import {NavBarItemsType} from "./types";

interface INavBarProps {
	scrollTo: (itemName: NavBarItemsType) => void;
	activeNavBarItem: NavBarItemsType;
}

const NavBar = ({scrollTo, activeNavBarItem}: INavBarProps) => {
	const classes = useStyles();
	const [activeItem, setActiveItem] = useState<NavBarItemsType>(
		NavBarItemsType.ABOUT
	);

	useEffect(() => {
		setActiveItem(activeNavBarItem);
	}, [activeNavBarItem]);

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		setActiveItem(NavBarItemsType.ABOUT);
	};
	return (
		<nav className={classes.navbar}>
			<section className={classes.cursorPointer} onClick={handleClick}>
				<Typography variant="h3">Shadab.Alam</Typography>
			</section>
			<div className={classes.hiddenUpSM}>
				<Image width={24} height={24} src="/menu_burger_icon.svg" />
			</div>
			<section className={classes.navBarItemsSection}>
				<NavBarItem
					title={NavBarItemsType.ABOUT}
					isActive={activeItem === NavBarItemsType.ABOUT}
					onClick={() => {
						setActiveItem(NavBarItemsType.ABOUT);
						scrollTo(NavBarItemsType.ABOUT);
					}}
				/>
				<NavBarItem
					title={NavBarItemsType.WORK}
					isActive={activeItem === NavBarItemsType.WORK}
					onClick={() => {
						setActiveItem(NavBarItemsType.WORK);
						scrollTo(NavBarItemsType.WORK);
					}}
				/>
				<NavBarItem
					title={NavBarItemsType.SKILLS}
					isActive={activeItem === NavBarItemsType.SKILLS}
					onClick={() => {
						setActiveItem(NavBarItemsType.SKILLS);
						scrollTo(NavBarItemsType.SKILLS);
					}}
				/>
				<NavBarItem
					title={NavBarItemsType.TESTIMONIALS}
					isActive={activeItem === NavBarItemsType.TESTIMONIALS}
					onClick={() => {
						setActiveItem(NavBarItemsType.TESTIMONIALS);
						scrollTo(NavBarItemsType.TESTIMONIALS);
					}}
				/>
			</section>
		</nav>
	);
};

export default NavBar;
