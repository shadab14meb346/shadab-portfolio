export interface ICompanyDetails {
	name: string;
	website: string;
	color: string;
}
export interface IPastCompanyDetails {
	showInSite: boolean;
	positionInSite: number;
	basicDetails: ICompanyDetails;
	position: string;
	workDescription: string;
}

export const pastCompanies: IPastCompanyDetails[] = [
	{
		showInSite: true,
		positionInSite: 1,
		basicDetails: {
			name: "Quorilla",
			website: "https://quorilla.com/",
			color: "rgb(127,227,162)",
		},
		position: "Frontend Engineer",
		workDescription: "Currently I work as frontend developer at Quorilla.",
	},
	{
		showInSite: true,
		positionInSite: 2,
		basicDetails: {
			name: "Siterecon",
			website: "https://order.siterecon.ai/",
			color: "#FFD02B",
		},
		position: "Freelancer Frontend Engineer",
		workDescription:
			"Working as a frontend freelancer on different modules of their web app.",
	},
	{
		showInSite: true,
		positionInSite: 3,
		basicDetails: {
			name: "Tweetflick",
			website: "https://tweetflick.com/",
			color: "rgb(102,80,213)",
		},
		position: "Indie Maker",
		workDescription:
			"Worked on Tweetflick as a side project. Handled all kind of things: Full-stack development, Product related decisions, and much more.",
	},
	{
		showInSite: true,
		positionInSite: 4,
		basicDetails: {
			name: "Publaunch",
			website: "https://publaunch.com/",
			color: "rgb(227,71,52)",
		},
		position: "Freelancer Frontend Engineer",
		workDescription:
			"Worked as a freelancer frontend developer and developed a few modules of their web app.",
	},
	{
		showInSite: true,
		positionInSite: 5,
		basicDetails: {
			name: "TCS",
			website: "https://www.tcs.com/",
			color: "#5F68C3",
		},
		position: "Full stack developer",
		workDescription:
			"I started my career of Software Engineer from TCS and here I worked as Full stack developer.",
	},
];
