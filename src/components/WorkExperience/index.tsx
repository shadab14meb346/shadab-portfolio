import React from "react";
import {Typography} from "@material-ui/core";

import {useStyles} from "./useStyles";
import WorkExperienceCard from "./WorkExperienceCard";
import {IPastCompanyDetails, pastCompanies} from "./pastCompanies";

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
				{pastCompanies.map((company: IPastCompanyDetails, index: number) => {
					return (
						<WorkExperienceCard
							positionInSite={`0${index + 1}`}
							companyDetails={company.basicDetails}
							position={company.position}
							description={company.workDescription}
						/>
					);
				})}
			</div>
		</main>
	);
};

export default WorkExperience;
