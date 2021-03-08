import React from "react";
import {useStyles} from "./useStyles";

const HeroSection = () => {
	const classes = useStyles();
	return (
		<section className={classes.border}>Welcome to the Hero Section </section>
	);
};

export default HeroSection;
