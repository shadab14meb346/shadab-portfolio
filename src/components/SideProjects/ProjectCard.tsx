import {Grid, Typography} from "@material-ui/core";
import Image from "next/image";
import {Link} from "@material-ui/core";

import {useStyles} from "./useStyles";

interface IProjectCardProps {
	title: string;
	description: string;
	imageFileName: string;
	link: string;
}
const ProjectCard = ({
	title,
	description,
	imageFileName,
	link,
}: IProjectCardProps) => {
	const classes = useStyles();
	return (
		<Grid item sm={6} xs={12}>
			<Image
				width={1848}
				height={949}
				src={`/${imageFileName}`}
				alt="project"
			/>
			<Link href={link} style={{textDecoration: "none", color: "inherit"}}>
				<Typography variant="h3" className={classes.title}>
					{title}
				</Typography>
			</Link>
			<Typography variant="body1" color="textSecondary">
				{description}
			</Typography>
		</Grid>
	);
};

export default ProjectCard;
