import {Link, Typography, Avatar} from "@material-ui/core";
import {useStyles} from "./useStyles";

interface ITestimonialCardProps {
	description?: string;
}

const TestimonialCard = ({description}: ITestimonialCardProps) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Avatar src="/rishabh-garg.jpeg" />
			<Typography variant="h3">
				‘’Robin is one of the best designers I have worked with in my entire
				life. He is a designer who is very capable of taking up complex projects
				and delivers impeccable design.’’
			</Typography>
			<Link href="https://www.linkedin.com/in/rishabhgarg7/">Rishabh Garg</Link>
		</div>
	);
};

export default TestimonialCard;
