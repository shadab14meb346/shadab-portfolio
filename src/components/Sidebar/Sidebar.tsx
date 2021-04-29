import {useState} from "react";
import {Drawer} from "@material-ui/core";
import Image from "next/image";

import {useStyles} from "./useStyles";
import FooterNavigationItem from "../Footer/FooterNavigationItem";
import {NavBarItemsType} from "../NavBar/types";

interface ISidebarProps {
	scrollTo: (itemName: NavBarItemsType) => void;
}
const Sidebar = ({scrollTo}: ISidebarProps) => {
	const classes = useStyles();
	const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

	return (
		<>
			<Image
				width={24}
				height={24}
				src="/menu_burger_icon.svg"
				onClick={() => {
					setSidebarVisible(true);
				}}
			/>
			<Drawer
				anchor={"right"}
				open={sidebarVisible}
				onClose={() => {
					setSidebarVisible(false);
				}}
				classes={{
					paper: classes.drawerPaper,
					paperAnchorRight: classes.paperAnchorRight,
				}}>
				<div
					className={classes.content}
					onClick={() => {
						setSidebarVisible(false);
					}}>
					<FooterNavigationItem
						onClick={() => {
							scrollTo(NavBarItemsType.ABOUT);
						}}>
						Home
					</FooterNavigationItem>
					<FooterNavigationItem
						onClick={() => {
							scrollTo(NavBarItemsType.WORK);
						}}>
						Work
					</FooterNavigationItem>
					<FooterNavigationItem
						onClick={() => {
							scrollTo(NavBarItemsType.SKILLS);
						}}>
						Skills
					</FooterNavigationItem>
					<FooterNavigationItem
						onClick={() => {
							scrollTo(NavBarItemsType.TESTIMONIALS);
						}}>
						Testimonials
					</FooterNavigationItem>
				</div>
			</Drawer>
		</>
	);
};

export default Sidebar;
