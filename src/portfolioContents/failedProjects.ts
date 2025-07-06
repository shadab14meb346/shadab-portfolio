/*
 * Failed Projects Data
 * These are projects that didn't go as planned but provided valuable learning experiences.
 * Feel free to add, edit or remove items from the list.
 */

export interface IFailedProject {
  title: string;
  description: string;
  image: string;
  duration: string;
  reasonForFailure: string;
  lessonsLearned: string[];
  technologies: string[];
}

export const failedProjects: IFailedProject[] = [
  {
    title: "Peekletters",
    description:
      "A curated research tool for finding high-quality, niche newsletters to sponsor. It helped marketers and founders identify relevant newsletters, assess performance metrics, and view transparent pricing—all in one place.",
    image: "/peekletters-dashboard.png",
    duration: "6 months (2023)",
    reasonForFailure:
      "Initial traction was strong but retention dropped due to a narrow target use case (newsletter sponsorships). Users expected automated outreach or CRM-like workflows, which Peekletters didn’t offer at the time.",
    lessonsLearned: [
      "Tools that solve discovery problems still need to plug into execution workflows",
      "Strong positioning can drive early interest, but long-term usage depends on daily utility",
      "Always validate how users want to act on the insights you're surfacing",
    ],
    technologies: ["NextJS", "NodeJS", "GraphQL", "Serverless", "Postgres"],
  },
];
