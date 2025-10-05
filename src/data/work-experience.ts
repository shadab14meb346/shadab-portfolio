export interface WorkExperienceEngagement {
  company: string;
  role: string;
  employmentType: string;
  period: string;
  location: string;
  website?: string;
  color: string;
  summary: string;
  highlights: string[];
  readMore?: {
    label: string;
    href: string;
  };
}

export const workExperience: WorkExperienceEngagement[] = [
  {
    company: "Airbase",
    role: "Software Engineer II",
    employmentType: "Full-time",
    period: "Dec 2023 – Present",
    location: "Remote",
    website: "https://www.airbase.com/",
    color: "#7C3AED",
    summary:
      "Owning internal tooling and product experience initiatives across the Airbase spend management platform.",
    highlights: [
      "Shipped an internal coordination tool that saves engineering and product teams 100+ hours every week.",
      "Led the bulk vendor import feature that cut first-payment onboarding time by 53% for new customers.",
      "Standardized a reusable UI component system that eliminated thousands of lines of duplicate code.",
      "Ramped up on unfamiliar product areas to deliver enterprise-critical features on compressed timelines.",
    ],
    readMore: {
      label: "View role",
      href: "https://www.linkedin.com/in/md-shadab-alam/",
    },
  },
  {
    company: "Magically AI",
    website: "https://magicallyai.carrd.co/",
    role: "Software Developer",
    employmentType: "Contract · Freelance",
    period: "Sep 2023 – Dec 2023",
    location: "United States · Remote",
    color: "#0EA5E9",
    summary:
      "Partnered with founding team to prototype AI-first consumer products end-to-end.",
    highlights: [
      "Designed and implemented the full UI/UX for a cross-platform React Native app that solves math problems from camera input.",
      "Built an MVP that auto-generates faceless short-form videos using OpenAI, FFmpeg, and stock footage for rapid social publishing.",
    ],
    readMore: {
      label: "Project recap",
      href: "https://magicallyai.carrd.co/",
    },
  },
  {
    company: "EaseData & Peekletters",
    role: "Technical Founder",
    employmentType: "Founder",
    period: "Jul 2022 – Jul 2023",
    location: "Remote",
    color: "#059669",
    summary:
      "Built health-tech and GTM automation products selected for the Antler India founder residency.",
    highlights: [
      "One of 70 founders chosen from 1,500+ applicants for Antler India’s entrepreneurial program.",
      "Launched an EaseData lab-test booking platform with Next.js, Serverless, GraphQL, and Postgres to improve diagnostic journeys.",
      "Delivered secure CRM APIs and automated GPT-4 powered cold-email personalization for Peekletters with a 70% reply rate.",
    ],
  },
  {
    company: "Quorilla & Fable",
    role: "Remote Frontend Engineer",
    employmentType: "Contract",
    period: "Aug 2020 – Jul 2022",
    location: "Remote",
    color: "#F97316",
    summary:
      "Scaled an ed-tech platform and productivity tooling for distributed teams.",
    highlights: [
      "Integrated TokBox WebRTC to deliver two-way classroom streaming, boosting course completion and engagement.",
      "Extended the LMS with social learning capabilities including posts, comments, and resource sharing.",
      "Shipped Fable – a Chrome extension powering async team collaboration and task flows.",
    ],
  },
  {
    company: "The Cumin Club",
    role: "Backend Developer",
    employmentType: "Contract",
    period: "Feb 2022 – Jul 2022",
    location: "Remote",
    website: "https://www.thecuminclub.com/",
    color: "#EA580C",
    summary:
      "Architected the subscription meal service’s backend from the ground up.",
    highlights: [
      "Implemented a Serverless Node.js, GraphQL, and Postgres stack supporting the new customer experience.",
      "Designed migration-safe database schemas and untangled tightly coupled tables for performance gains.",
      "Introduced automated testing and CI/CD pipelines to accelerate releases with confidence.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Full Stack Developer",
    employmentType: "Full-time",
    period: "Nov 2018 – Aug 2020",
    location: "Hyderabad, India",
    website: "https://www.tcs.com/",
    color: "#2563EB",
    summary:
      "Kick-started my engineering career delivering blockchain and web solutions for enterprise clients.",
    highlights: [
      "Translated business use cases into production-ready UI, chaincode, and REST APIs in Node.js.",
      "Prototyped blockchain MVPs across supply chain and transaction management with Hyperledger Fabric.",
    ],
  },
];
