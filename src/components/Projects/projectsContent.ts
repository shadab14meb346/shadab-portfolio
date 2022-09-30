export interface IProject {
	title: string;
	description: string;
	imageFileName: string;
}
export const projects: IProject[] = [
	{
		title: "Web App Development",
		description:
			"I am currently working at this project as a full time frontend developer. The challenging part in this role was to develop the frontend of streaming service. For the two way video conferencing we integrated third party APIs and made custom UI as per our designs.",
		imageFileName: "quorilla_web_app.png",
	},
	{
		title: "Web App Development",
		description:
			"Worked on a few modules of this product. It is a very interesting product solving a great business case and this was the challenging part of this project that we need to understand the business use case decent enough to give a good user experience",
		imageFileName: "siterecon_web_app.jpg",
	},
	{
		title: "Web App & Chrome Extension Development",
		description:
			"This is one of my most favorite solutions I have worked upon. I solved quite challenging problems while working on Tweetflick. From Twitter bot to Chrome Extension.",
		imageFileName: "screely-1618617230184.png",
	},
];
