export interface SideProject {
  title: string;
  description: string;
  image: string;
  href: string;
}

export const sideProjects: SideProject[] = [
  {
    title: "BillSplit",
    description:
      "Automated Slack companion that splits, reconciles, and reminds teams about shared expenses without leaving chat.",
    image: "/billsplit-landing-page.png",
    href: "https://billsplit.softr.app/",
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
];
