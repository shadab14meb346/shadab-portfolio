import {Grid} from "@material-ui/core";

import SectionContainer from "../Common/SectionContainer/SectionContainer";
import SectionHeader from "../Common/SectionHeader";
import {useStyles} from "./useStyles";

const Testimonials = () => {
	const classes = useStyles();
	return (
		<SectionContainer>
			<Grid container spacing={2}>
				<Grid xs={12} sm={6} item>
					<SectionHeader
						title=""
						subtitle="This is what people say about me"
						description="Here are a few lines from people who I have worked with over the past 2.5+ years in my software development career."
					/>
				</Grid>
			</Grid>
		</SectionContainer>
	);
};

export default Testimonials;
