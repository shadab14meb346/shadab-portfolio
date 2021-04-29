import React, {MutableRefObject, useRef} from "react";

import {useStyles} from "./useStyles";
import WorkExperienceCard from "./WorkExperienceCard";
import {IPastCompanyDetails, pastCompanies} from "./pastCompanies";
import SectionHeader from "../Common/SectionHeader";
import SectionContainer from "../Common/SectionContainer/SectionContainer";

interface IWorkExperienceProps {
	sectionRef: MutableRefObject<any>;
}

const WorkExperience = ({sectionRef}: IWorkExperienceProps) => {
	const classes = useStyles();

	return (
		<SectionContainer sectionRef={sectionRef}>
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
							key={company.basicDetails.name}
						/>
					);
				})}
			</div>
		</SectionContainer>
	);
};

export default WorkExperience;
