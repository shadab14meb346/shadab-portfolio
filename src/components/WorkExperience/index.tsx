import React from "react";
import {Typography} from "@material-ui/core";

import {useStyles} from "./useStyles";
import WorkExperienceCard from "./WorkExperienceCard";
import {IPastCompanyDetails, pastCompanies} from "./pastCompanies";
import SectionHeader from "../Common/SectionHeader";
import SectionContainer from "../Common/SectionContainer";

const WorkExperience = () => {
	const classes = useStyles();
	return (
		<SectionContainer>
			<SectionHeader
				title="WORK EXPERIENCE"
				subtitle="Companies I have worked for in the past"
			/>
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
		</SectionContainer>
	);
};

export default WorkExperience;
