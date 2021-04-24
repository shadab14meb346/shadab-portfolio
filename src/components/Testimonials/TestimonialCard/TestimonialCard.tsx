import {Link, Typography, Avatar} from "@material-ui/core";
import {ITestimonial} from "../../../portfolioContents/testimonials";
import {useStyles} from "./useStyles";

interface ITestimonialCardProps extends ITestimonial {}

const TestimonialCard = ({givenBy, content}: ITestimonialCardProps) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Avatar src={`/${givenBy.imageFileName}`} className={classes.large} />
			<Typography variant="h3" align="left">
				‘’{content}’’
			</Typography>
			<Link
				href={givenBy.linkedInProfile}
				className={classes.customLinkColor}
				target="_blank">
				<Typography variant="h4" color="textSecondary">
					{givenBy.name}
				</Typography>
			</Link>
		</div>
	);
};

export default TestimonialCard;
