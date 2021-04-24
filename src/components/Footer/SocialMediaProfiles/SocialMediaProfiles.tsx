import {Box, Grid, Typography} from "@material-ui/core";
import {socialMediaProfiles} from "../../../portfolioContents/socialMediaProfiles";
import SocialMediaProfileItem from "./SocialMediaProfiletem";

import {useStyles} from "./useStyles";

const SocialMediaProfiles = () => {
	const classes = useStyles();
	return (
		<Box className={classes.container}>
			{socialMediaProfiles.map((socialMedia) => {
				return <SocialMediaProfileItem {...socialMedia} />;
			})}
		</Box>
	);
};

export default SocialMediaProfiles;
