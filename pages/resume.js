import {heroSection} from "../src/portfolioContents/heroSection";
const Resume = () => {
	return null;
};

export async function getStaticProps() {
	return {
		redirect: {
			destination: heroSection.resume,
			permanent: false,
		},
	};
}

export default Resume;
