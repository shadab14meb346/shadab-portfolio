import {Grid, Typography, Link} from "@material-ui/core";
import Image from "next/image";

import {useStyles} from "./useStyles";

interface IStoryCardProps {
	title: string;
	description: string;
	imageFileName: string;
	link: string;
}
const StoryCard = ({
	title,
	description,
	imageFileName,
	link,
}: IStoryCardProps) => {
	const classes = useStyles();
	return (
		<Grid item sm={6} xs={12}>
			<Image width={1848} height={949} src={`/${imageFileName}`} />
			<Link href={link} target="_blank" className={classes.link}>
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

export default StoryCard;
