import {Grid} from "@material-ui/core";

import {useStyles} from "./useStyles";
import SectionContainer from "../Common/SectionContainer";
import SectionHeader from "../Common/SectionHeader";
import ProjectCard from "./ProjectCard";
import {IProject, projects} from "./projectsContent";
import {MutableRefObject} from "react";
interface ISideProjectsProps {
	sectionRef: MutableRefObject<any>;
}
const SideProjects = ({sectionRef}: ISideProjectsProps) => {
	const classes = useStyles();
	return (
		<SectionContainer sectionRef={sectionRef}>
			<Grid container className={classes.container} spacing={4}>
				<Grid item xs={12}>
					<SectionHeader
						title="SIDE PROJECTS"
						subtitle="Things I've built in my free time"
					/>
				</Grid>

				{projects.map((project: IProject) => {
					return (
						<ProjectCard
							title={project.title}
							description={project.description}
							imageFileName={project.imageFileName}
							key={project.title}
							link={project.link}
						/>
					);
				})}
			</Grid>
		</SectionContainer>
	);
};

export default SideProjects;
