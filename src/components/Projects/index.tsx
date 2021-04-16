import {Grid} from "@material-ui/core";

import {useStyles} from "./useStyles";
import SectionContainer from "../Common/SectionContainer";
import SectionHeader from "../Common/SectionHeader";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	const classes = useStyles();
	return (
		<SectionContainer>
			<Grid container className={classes.container} spacing={4}>
				<Grid item xs={12}>
					<SectionHeader
						title="MY PROJECTS"
						subtitle="Work that I’ve done for the past 3 years"
					/>
				</Grid>

				<ProjectCard
					title="Web App Development"
					description="I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one."
					imageFileName="quorilla_web_app.png"
				/>
				<ProjectCard
					title="Web App Development"
					description="I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one."
					imageFileName="siterecon_web_app.jpg"
				/>

				<ProjectCard
					title="Web App & Chrome Extension Development"
					description="I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one."
					imageFileName="screely-1618617230184.png"
				/>
			</Grid>
		</SectionContainer>
	);
};

export default Projects;
