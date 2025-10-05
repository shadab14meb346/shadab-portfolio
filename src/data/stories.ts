export interface Story {
  title: string;
  description: string;
  image: string;
  href: string;
}
//
export const stories: Story[] = [
  {
    title: "From Mechanical Engineer to Software Developer",
    description:
      "My journey from a mechanical engineering degree to building web products full-time.",
    image: "/stories/mechanical_to_software_article_cover_img.jpeg",
    href: "https://hashnode.com/post/from-mechanical-engineer-to-software-developer-my-coding-journey-ckqvw77cy07dqmms19qe20o3j",
  },
  {
    title: "Lessons from a Failed Venture",
    description:
      "A candid reflection on my first startup attempt and the product lessons I carried forward.",
    image: "/stories/startup_article_cover_img.jpeg",
    href: "https://shadabshs.medium.com/lessons-learned-from-my-first-failed-venture-3758b6f8d389",
  },
  {
    title: "Inside Antler India Residency",
    description:
      "What it was like to immerse myself in Antler's founder program and collaborate with fellow builders.",
    image: "/stories/anter-india-residency.jpeg",
    href: "https://md-shadab-alam.notion.site/my-experience-at-Antler-India-Residency-Programm-84b9cc042e904a2787e93553cce7adac?pvs=4",
  },
];
