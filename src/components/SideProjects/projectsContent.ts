export interface IProject {
	title: string;
	description: string;
	imageFileName: string;
	link: string;
}
export const projects: IProject[] = [
	{
		title: "BillSplit",
		description:
			"BillSplit is a Slack App which I build with a friend. BillSplit makes your life easier by splitting bills, tracking them and getting back the balances, all in Slack",
		imageFileName: "billsplit-landing-page.png",
		link: "https://www.billsplit.app/",
	},
	{
		title: "Word Khoj Chrome Extension",
		description: `It is a chrome extension. 
			Word Khoj is an extension which helps you solve all these troubles in just 2 steps -
			1) Open the extension & type the word/phrase to be searched in hinglish
			2) Scroll through the highlighted results on the page
			`,
		imageFileName: "word-Khoj-extension.png",
		link: "https://chrome.google.com/webstore/detail/word-khoj/bdocoepjnibclhlibcccnjpgeknhdlah?hl=en-GB&authuser=7",
	},
	{
		title: "FabPic",
		description: "A simple and easy to use image editor.",
		imageFileName: "fabpic.png",
		link: "https://fabpic.app/",
	},
];
