export interface WorkExperienceEngagement {
  name: string;
  website: string;
  color: string;
  role: string;
  summary: string;
}

export const workExperience: WorkExperienceEngagement[] = [
  {
    name: "The Cumin Club",
    website: "https://www.thecuminclub.com/",
    color: "#D46A19",
    role: "Backend Developer · Freelancer",
    summary:
      "Built a greenfield backend using Node.js, TypeScript, AWS, Serverless, Postgres, and GraphQL to power their meal subscription platform.",
  },
  {
    name: "Quorilla",
    website: "https://quorilla.com/",
    color: "#7FE3A2",
    role: "Frontend Developer · Full Time",
    summary:
      "Integrated interactive two-way video streaming with TokBox, shipped educator and student dashboards, and built social modules with React, Redux, and TypeScript.",
  },
  {
    name: "Siterecon",
    website: "https://order.siterecon.ai/",
    color: "#FFD02B",
    role: "Frontend Developer · Freelancer",
    summary:
      "Partnered with the product team to deliver data-heavy modules for their geospatial management platform.",
  },
  {
    name: "Tweetflick",
    website: "https://tweetflick.com/",
    color: "#6650D5",
    role: "Co-founder",
    summary:
      "Co-created the Tweetflick platform, owning full-stack development, product direction, and growth experiments across web, API, and automation layers.",
  },
  {
    name: "Publaunch",
    website: "https://publaunch.com/",
    color: "#E34734",
    role: "Frontend Developer · Freelancer",
    summary:
      "Delivered bespoke modules that improved onboarding and content management workflows for creators.",
  },
  {
    name: "TCS",
    website: "https://www.tcs.com/",
    color: "#5F68C3",
    role: "Full Stack Developer",
    summary:
      "Kickstarted my engineering career owning full-stack features for large scale enterprise projects.",
  },
  {
    name: "Geekflare Assist",
    website: "https://geekflare.com/assist/",
    color: "#FF4E00",
    role: "Full Stack Developer · Freelancer",
    summary:
      "Built GPT-3 powered assistant: GraphQL APIs with Node.js and a Next.js frontend that translated Unix, SQL, and DevOps knowledge into chat workflows.",
  },
];
