import {Grid, Typography} from "@material-ui/core";
import {NavBarItemsType} from "../NavBar/types";
import FooterNavigationItem from "./FooterNavigationItem";
import SocialMediaProfiles from "./SocialMediaProfiles/SocialMediaProfiles";

import {useStyles} from "./useStyles";

interface IFooterProps {
	scrollTo: (itemName: NavBarItemsType) => void;
}

const Footer = ({scrollTo}: IFooterProps) => {
	const classes = useStyles();
	const handleClick = () => {
		scrollTo(NavBarItemsType.ABOUT);
	};
	return (
		<footer className={classes.container}>
			<Grid container>
				<Grid item sm={6} xs={12}>
					<Typography
						variant="h3"
						className={classes.name}
						onClick={handleClick}>
						Shadab.Alam
					</Typography>
					<SocialMediaProfiles />
				</Grid>

				<Grid item sm={6} xs={12}>
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
				</Grid>
				<Typography
					variant="body2"
					color="textSecondary"
					className={classes.copyRight}>
					Not Copyright 2020 • Md Shadab Alam{" "}
				</Typography>
			</Grid>
		</footer>
	);
};

export default Footer;
