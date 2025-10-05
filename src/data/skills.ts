import type { LucideIcon } from "lucide-react";
import { Lightbulb, Share2, UserCheck } from "lucide-react";

export interface Skill {
  name: string;
  description?: string;
  iconImage?: string;
  icon?: LucideIcon;
}

export const skills: Skill[] = [
  { name: "React & Next.js", iconImage: "/skills-logos/next-js-icon.png" },
  { name: "TypeScript", iconImage: "/skills-logos/typescript.svg" },
  { name: "Redux Toolkit", iconImage: "/skills-logos/redux.svg" },
  { name: "Tailwind CSS", iconImage: "/skills-logos/tailwindcss.svg" },
  {
    name: "React Testing Library",
    iconImage: "/skills-logos/react-testing-library-icon.png",
  },
  { name: "React Native", iconImage: "/skills-logos/react-native.svg" },
  { name: "Zustand", iconImage: "/skills-logos/zustand.png" },

  { name: "Node.js", iconImage: "/skills-logos/nodejs-logo.svg" },
  { name: "GraphQL", icon: Share2 },
  { name: "AWS", iconImage: "/skills-logos/aws.svg" },
  { name: "Serverless", iconImage: "/skills-logos/serverless-icon.svg" },
  { name: "PostgreSQL", iconImage: "/skills-logos/postgresql.svg" },
  { name: "MongoDB", iconImage: "/skills-logos/mongodb.svg" },

  { name: "Git & CI/CD", iconImage: "/skills-logos/git.png" },
  { name: "Product Mindset", icon: Lightbulb },
  { name: "Customer Empathy", icon: UserCheck },
];
