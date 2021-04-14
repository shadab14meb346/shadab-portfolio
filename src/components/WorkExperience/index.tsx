import React from "react";
import {Typography} from "@material-ui/core";

import {useStyles} from "./useStyles";
import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperience = () => {
	const classes = useStyles();
	return (
		<main className={classes.container}>
			<div className={classes.title}>
				<Typography variant="h5" color="textSecondary">
					WORK EXPERIENCE
				</Typography>
				<Typography variant="h2">
					Companies I have worked for in the past
				</Typography>
			</div>
			<div className={classes.content}>
				<WorkExperienceCard
					count={"01"}
					company="Quorilla"
					position="Frontend Engineer"
					description="I have worked at Quorilla as a Frontend Engineer"
				/>
				<WorkExperienceCard
					count={"02"}
					company="Siterecon"
					position="Freelance Frontend Developer"
					description="I have worked at Siterecon as a Frontend Developer"
				/>
				<WorkExperienceCard
					count={"03"}
					company="Publaunch"
					position="Freelance Frontend Developer"
					description="I have worked at Publaunch as a Frontend Developer"
				/>
				<WorkExperienceCard
					count={"04"}
					company="Tweetflick"
					position="Indie Maker"
					description="I have worked at Tweetflick as a Frontend Developer"
				/>
			</div>
		</main>
	);
};

export default WorkExperience;
