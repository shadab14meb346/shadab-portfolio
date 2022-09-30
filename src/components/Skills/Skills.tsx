import {MutableRefObject} from "react";

import SectionContainer from "../Common/SectionContainer/SectionContainer";
import SectionHeader from "../Common/SectionHeader";
import SkillItem from "./SkillItem";
import {ISkill, mySkills} from "./skillsContent";
import {useStyles} from "./useStyles";

interface ISkillsProps {
	sectionRef: MutableRefObject<any>;
}

const Skills = ({sectionRef}: ISkillsProps) => {
	const classes = useStyles();
	return (
		<SectionContainer sectionRef={sectionRef}>
			<SectionHeader title="" subtitle="Skillset" />
			<div className={classes.content} ref={sectionRef}>
				{mySkills.map((skill: ISkill) => {
					return (
						<SkillItem key={skill.name} name={skill.name} image={skill.image} />
					);
				})}
			</div>
		</SectionContainer>
	);
};

export default Skills;
