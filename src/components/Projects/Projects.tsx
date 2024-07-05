import { Grid } from "@material-ui/core";

import { useStyles } from "./useStyles";
import SectionContainer from "../Common/SectionContainer";
import SectionHeader from "../Common/SectionHeader";
import ProjectCard from "./ProjectCard";
import { IProject, projects } from "./projectsContent";

const Projects = () => {
  const classes = useStyles();
  return (
    <SectionContainer>
      <Grid container className={classes.container} spacing={4}>
        <Grid item xs={12}>
          <SectionHeader
            title="MY PROJECTS"
            subtitle="Work that I’ve done for the past 4 years"
          />
        </Grid>

        {projects.map((project: IProject) => {
          return (
            <ProjectCard
              title={project.title}
              description={project.description}
              imageFileName={project.imageFileName}
              key={project.title}
            />
          );
        })}
      </Grid>
    </SectionContainer>
  );
};

export default Projects;
