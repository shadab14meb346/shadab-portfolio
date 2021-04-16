import React from "react";
import {Box, Typography} from "@material-ui/core";

import {useStyles} from "./useStyles";
import {ICompanyDetails} from "./pastCompanies";

interface IWorkExperienceCardProps {
	positionInSite: string;
	companyDetails: ICompanyDetails;
	position: string;
	description: string;
}
const WorkExperienceCard = ({
	positionInSite,
	companyDetails,
	position,
	description,
}: IWorkExperienceCardProps) => {
	const classes = useStyles();
	return (
		<div className={classes.workExperienceCardContainer}>
			<Typography
				variant="body1"
				color="textSecondary"
				className={classes.customFontSize}>
				{positionInSite}
			</Typography>
			<Box display="flex">
				<Typography variant="h3">
					{companyDetails.name}, {position}
				</Typography>
			</Box>

			<Typography variant="body2" color="textSecondary">
				{description}
			</Typography>
		</div>
	);
};

export default WorkExperienceCard;
