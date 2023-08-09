import {Grid, Typography} from "@material-ui/core";
import Image from "next/image";

import {useStyles} from "./useStyles";

interface IProjectCardProps {
	title: string;
	description: string;
	imageFileName: string;
}
const ProjectCard = ({
	title,
	description,
	imageFileName,
}: IProjectCardProps) => {
	const classes = useStyles();
	return (
		<Grid item sm={6} xs={12}>
			<Image
				width={1848}
				height={949}
				src={`/${imageFileName}`}
				alt={imageFileName}
			/>
			<Typography variant="h3" className={classes.title}>
				{title}
			</Typography>
			<Typography variant="body1" color="textSecondary">
				{description}
			</Typography>
		</Grid>
	);
};

export default ProjectCard;
