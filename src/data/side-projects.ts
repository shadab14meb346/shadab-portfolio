export interface SideProject {
  title: string;
  description: string;
  image?: string;
  video?: string;
  href: string;
}

export const sideProjects: SideProject[] = [
  {
    title: "MockFill",
    description:
      "Chrome extension that autocompletes forms with realistic mock data so developers and testers ship faster.",
    video: "https://pub-7b607db1849d4834b25ec56d1f6204fa.r2.dev/mockfill-demo.mp4",
    href: "https://mockfill.com/",
  },
  {
    title: "Word Khoj",
    description:
      "Chrome extension that transliterates Hindi phrases and highlights relevant matches on any web page.",
    image: "/word-Khoj-extension.png",
    href: "https://chrome.google.com/webstore/detail/word-khoj/bdocoepjnibclhlibcccnjpgeknhdlah?hl=en-GB&authuser=7",
  },
  {
    title: "FabPic",
    description:
      "Lightweight image editor for quick social, marketing, and product visuals—built for speed and simplicity.",
    image: "/fabpic.png",
    href: "https://fabpic.app/",
  },
  {
    title: "BillSplit",
    description:
      "Automated Slack companion that splits, reconciles, and reminds teams about shared expenses without leaving chat.",
    image: "/billsplit-landing-page.png",
    href: "https://billsplit.softr.app/",
  },
];
