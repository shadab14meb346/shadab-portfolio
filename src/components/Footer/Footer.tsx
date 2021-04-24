import {Grid, Typography} from "@material-ui/core";
import FooterNavigationItem from "./FooterNavigationItem";
import SocialMediaProfiles from "./SocialMediaProfiles/SocialMediaProfiles";

import {useStyles} from "./useStyles";

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.container}>
			<Grid container>
				<Grid item sm={6} xs={12}>
					<Typography variant="h3">Shadab.Alam</Typography>
					<SocialMediaProfiles />
				</Grid>

				<Grid item sm={6} xs={12}>
					<FooterNavigationItem>Home</FooterNavigationItem>
					<FooterNavigationItem>Experience</FooterNavigationItem>
					<FooterNavigationItem>Work</FooterNavigationItem>
					<FooterNavigationItem>Skills</FooterNavigationItem>
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
