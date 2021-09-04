import React from "react";
import Image from "next/image";
import {Typography} from "@material-ui/core";

import {useStyles} from "./useStyles";
import {heroSection} from "../../portfolioContents/heroSection";

const HeroSection = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.imageContainer}>
				<Image src="/shadab-park-standing.jpeg" width={433} height={577} />
			</div>
			<div className={classes.content}>
				<Typography variant="h1">I’m Md Shadab Alam.</Typography>
				<Typography variant="h1">A Full Stack Developer</Typography>
				<Typography variant="h1" className={classes.customFontColor}>
					based in India.
				</Typography>
				<Typography variant="body1" className={classes.about}>
					{heroSection.description}
				</Typography>
			</div>
		</div>
	);
};

export default HeroSection;
