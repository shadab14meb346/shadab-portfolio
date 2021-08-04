import {useState, useEffect} from "react";
import classNames from "classnames";

import NavBarItem from "../NavBarItem/NavBarItem";
import {NavBarItemsType} from "../types";
import {useStyles} from "./useStyles";

interface INavbarItemsProps {
	activeNavBarItem: NavBarItemsType;
	scrollTo: (itemName: NavBarItemsType) => void;
}
const NavbarItems = ({activeNavBarItem, scrollTo}: INavbarItemsProps) => {
	const classes = useStyles();

	const [activeItem, setActiveItem] = useState<NavBarItemsType>(
		NavBarItemsType.ABOUT
	);

	useEffect(() => {
		setActiveItem(activeNavBarItem);
	}, [activeNavBarItem]);
	return (
		<section className={classNames(classes.navBarItemsSection)}>
			{/* {Object.entries(NavBarItemsType).map()} */}
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
			<NavBarItem
				title={NavBarItemsType.STORIES}
				isActive={activeItem === NavBarItemsType.STORIES}
				onClick={() => {
					setActiveItem(NavBarItemsType.STORIES);
					scrollTo(NavBarItemsType.STORIES);
				}}
			/>
		</section>
	);
};

export default NavbarItems;
