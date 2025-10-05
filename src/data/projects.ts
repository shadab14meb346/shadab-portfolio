export interface ProjectShowcase {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export const featuredProjects: ProjectShowcase[] = [
  {
    title: "Quorilla Streaming Platform",
    description:
      "Led the frontend build of an education streaming platform, crafting a custom WebRTC classroom experience with whiteboards, chat, and lesson tools.",
    image: "/quorilla_web_app.png",
    href: "https://quorilla.com/",
  },
  {
    title: "Siterecon Operations Suite",
    description:
      "Shipped GIS-driven dashboards and workflows for landscaping operations teams, balancing map-heavy data visualizations with usability.",
    image: "/siterecon_web_app.jpg",
  },
  {
    title: "Tweetflick Web + Chrome Extension",
    description:
      "Launched Tweetflick across web and a Chrome extension, solving complex sync, offline storage, and automation problems for power Twitter users.",
    image: "/screely-1618617230184.png",
    href: "https://tweetflick.com/",
  },
];
