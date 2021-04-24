import {Box, Grid} from "@material-ui/core";
import {ITestimonial, testimonials} from "../../portfolioContents/testimonials";
import Carousel from "../Common/Carousel";

import SectionContainer from "../Common/SectionContainer";
import SectionHeader from "../Common/SectionHeader";
import TestimonialCard from "./TestimonialCard";
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

			<Carousel>
				{testimonials.map((testimonial: ITestimonial) => {
					return (
						<TestimonialCard
							givenBy={testimonial.givenBy}
							content={testimonial.content}
						/>
					);
				})}
			</Carousel>
		</SectionContainer>
	);
};

export default Testimonials;
