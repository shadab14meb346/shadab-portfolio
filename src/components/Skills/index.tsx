import SectionContainer from "../Common/SectionContainer";
import SectionHeader from "../Common/SectionHeader";
import SkillItem from "./SkillItem";
import {useStyles} from "./useStyles";
import {ISkill, mySkills} from "./skills";

const Skills = () => {
	const classes = useStyles();
	return (
		<SectionContainer>
			<SectionHeader title="" subtitle="Skillset" />
			<div className={classes.content}>
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
