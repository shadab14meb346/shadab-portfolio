import React from "react";
import {Box, Typography} from "@material-ui/core";

import {useStyles} from "./useStyles";

interface IWorkExperienceCardProps {
	count: string;
	company: string;
	position: string;
	description: string;
}
const WorkExperienceCard = ({
	count,
	company,
	position,
	description,
}: IWorkExperienceCardProps) => {
	const classes = useStyles();
	return (
		<div>
			<Typography
				variant="body1"
				color="textSecondary"
				className={classes.customFontSize}>
				{count}
			</Typography>
			<Box display="flex">
				<Typography variant="h3">
					{company},{position}
				</Typography>
			</Box>

			<Typography variant="body2" color="textSecondary">
				{description}
			</Typography>
		</div>
	);
};

export default WorkExperienceCard;
