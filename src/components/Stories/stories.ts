export interface IStory {
	title: string;
	description: string;
	imageFileName: string;
	link: string;
}
export const stories: IStory[] = [
	{
		title: "From Mechanical Engineer to Software Developer – My Coding Journey",
		description:
			"An article about my journey from earning a bachelor's degree to a software engineer",
		imageFileName: "mechanical_to_software_article_cover_img.jpeg",
		link: "https://hashnode.com/post/from-mechanical-engineer-to-software-developer-my-coding-journey-ckqvw77cy07dqmms19qe20o3j",
	},
	{
		title: "Lessons learned from my first failed venture",
		description:
			"An article about my learnings I had due to my first failed venture",
		imageFileName: "startup_article_cover_img.jpeg",
		link: "https://shadabshs.medium.com/lessons-learned-from-my-first-failed-venture-3758b6f8d389",
	},
];