import {useState} from "react";
import {Drawer} from "@material-ui/core";
import Image from "next/image";

import {useStyles} from "./useStyles";
import {NavBarItemsType} from "../NavBar/types";
import NavbarItems from "../NavBar/NavBarItems";

interface ISidebarProps {
	scrollTo: (itemName: NavBarItemsType) => void;
	activeNavBarItem: NavBarItemsType;
}
const Sidebar = ({scrollTo, activeNavBarItem}: ISidebarProps) => {
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
				anchor="right"
				open={sidebarVisible}
				onClose={() => {
					setSidebarVisible(false);
				}}
				classes={{
					paper: classes.drawerPaper,
					paperAnchorRight: classes.paperAnchorRight,
				}}>
				<div
					onClick={() => {
						setSidebarVisible(false);
					}}>
					<NavbarItems
						scrollTo={scrollTo}
						activeNavBarItem={activeNavBarItem}
					/>
				</div>
			</Drawer>
		</>
	);
};

export default Sidebar;
