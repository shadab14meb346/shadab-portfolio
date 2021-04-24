export interface ITestimonial {
	givenBy: {
		name: string;
		linkedInProfile: string;
		imageFileName: string;
	};
	content: string;
}
export const testimonials: ITestimonial[] = [
	{
		givenBy: {
			name: "Rishabh Garg",
			linkedInProfile: "https://www.linkedin.com/in/rishabhgarg7/",
			imageFileName: "rishabh-garg.jpeg",
		},
		content: `I worked with Shadab as partner on our indie product called
				Tweetflick. He's good javascript and react developer and was able to
				build new features and requests in record time. He's a fast learner and
				able to pick up new things pretty fast which is too much important in a
        startup kind of ecosystem.`,
	},
	{
		givenBy: {
			name: "Sravani Akuthota",
			linkedInProfile: "https://www.linkedin.com/in/sravani-akuthota/",
			imageFileName: "sravani-akuthota.jpeg",
		},
		content: `Shadab and I were part of the same group but didn't work together directly on a project, though sometimes we had some discussions. He is a great JavaScript Developer and very specific to the point for technology.
We use to have lunch and breaks together in the team. He is an optimistic, humorous, and active personality and engages everyone.`,
	},
	{
		givenBy: {
			name: "Pavan Kumar Raju Chamarthi",
			linkedInProfile:
				"https://www.linkedin.com/in/pavan-kumar-raju-chamarthi-154389125/",
			imageFileName: "pavan-kumar-raju-chamarthi.jpeg",
		},
		content: `I worked with Md Shadab Alam in the same team on the same project in which he was a backend and blockchain developer. He has great problem-solving skills. He is a very dedicated developer, whatever tasks he was assigned he accomplish it always. Even as a fresher in the team he had a great attitude to take up responsibilities and get it done.`,
	},
];
