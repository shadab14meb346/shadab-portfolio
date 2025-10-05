export interface WorkExperienceEngagement {
  company: string;
  logo?: string;
  role: string;
  employmentType: string;
  period: string;
  location: string;
  website?: string;
  color: string;
  summary: string;
  highlights: string[];
  links?: Array<{
    label: string;
    href: string;
  }>;
  categories: Array<"full-time" | "contract">;
  bgColor?: string;
}

export const workExperience: WorkExperienceEngagement[] = [
  {
    company: "Airbase",
    logo: "/logos/airbase.svg",
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
    links: [
      {
        label: "Company website",
        href: "https://www.airbase.com/",
      },
    ],
    categories: ["full-time"],
  },
  {
    company: "Magically AI",
    logo: "/logos/magically-ai.svg",
    role: "Software Developer",
    employmentType: "Contract · Freelance",
    period: "Sep 2023 – Dec 2023",
    location: "Remote",
    website: "https://magicallyai.carrd.co/",
    color: "#0EA5E9",
    summary:
      "Worked as a freelancer/contractor to prototype AI-first consumer products end-to-end.",
    highlights: [
      "Implemented the full UI/UX for a cross-platform React Native app that solves math problems from camera input using AI",
      "Built an MVP that auto-generates faceless short-form videos using OpenAI, FFmpeg, and stock footage for rapid social publishing.",
    ],
    links: [
      {
        label: "MyStudyMate App",
        href: "https://mystudymate.ai/",
      },
      {
        label: "Company website",
        href: "https://magicallyai.carrd.co/",
      },
    ],
    categories: ["contract"],
  },
  {
    company: "EaseData & Peekletters",
    logo: "/logos/peekletters.svg",
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
    links: [
      {
        label: "Peekletters",
        href: "https://peekletters.vercel.app/",
      },
      {
        label: "EaseData",
        href: "https://easedata.vercel.app/",
      },
      {
        label: "Antler India",
        href: "https://x.com/AntlerIndia/status/1543134948072488960",
      },
    ],
    categories: ["full-time", "contract"],
  },
  {
    company: "Quorilla & Fable",
    logo: "/logos/quorilla.svg",
    role: "Remote Frontend Engineer",
    employmentType: "Contract",
    period: "Aug 2020 – Jul 2022",
    location: "Remote",
    color: "#F97316",
    summary:
      "Worked as a founding engineer with the same founders building an EdTech startup and a productivity startup.",
    highlights: [
      "Integrated TokBox APIs to deliver two-way classroom streaming, boosting course completion and engagement.",
      "Shipped Fable – a Chrome extension powering async team collaboration and task flows.",
      "Extended the LMS with social learning capabilities including posts, comments, and resource sharing.",
    ],
    links: [
      {
        label: "Quorilla",
        href: "https://quorilla.com/",
      },
      {
        label: "Fable extension",
        href: "https://chrome.google.com/webstore/detail/fable/",
      },
    ],
    categories: ["full-time", "contract"],
  },
  {
    company: "The Cumin Club",
    logo: "/logos/cumin-club.svg",
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
    links: [
      {
        label: "The Cumin Club",
        href: "https://www.thecuminclub.com/",
      },
    ],
    categories: ["contract"],
  },
  {
    company: "Publaunch",
    logo: "/logos/publaunch.svg",
    role: "Frontend Developer",
    employmentType: "Freelance",
    period: "2021",
    location: "Remote",
    color: "#EA7A15",
    summary:
      "Worked as a freelance frontend developer delivering feature modules for their publishing platform.",
    highlights: [
      "Shipped bespoke UI flows that improved author onboarding and campaign management.",
      "Collaborated directly with the founding team to translate product concepts into production-ready React components.",
    ],
    links: [
      {
        label: "Publaunch",
        href: "https://www.publaunch.com/",
      },
    ],
    categories: ["contract"],
  },
  {
    company: "Geekflare Assist",
    logo: "/logos/geekflare.svg",
    role: "Full Stack Developer",
    employmentType: "Freelance",
    period: "2021",
    location: "Remote",
    color: "#0F766E",
    summary:
      "Built GPT-3 powered support experiences that answered Unix, SQL, and DevOps questions for users.",
    highlights: [
      "Developed GraphQL APIs with Node.js to orchestrate OpenAI prompts and deliver contextual answers.",
      "Implemented a performant Next.js frontend that surfaced chat history, suggestions, and usage analytics.",
    ],
    links: [
      {
        label: "Geekflare Assist",
        href: "https://geekflare.com/assist/",
      },
    ],
    categories: ["contract"],
  },
  {
    company: "Tata Consultancy Services",
    logo: "/logos/tcs.svg",
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
    links: [
      {
        label: "Company website",
        href: "https://www.tcs.com/",
      },
    ],
    categories: ["full-time"],
  },
  {
    company: "Siterecon",
    logo: "/logos/siterecon.svg",
    bgColor: "bg-white",
    role: "Frontend Engineer",
    employmentType: "Freelance",
    location: "Remote",
    website: "https://order.siterecon.ai/",
    color: "#7C3AED",
    period: "2 Months",
    highlights: [
      "Worked as a freelancer frontend developer on different modules of their web app.",
    ],
    summary:
      "Worked as a freelancer frontend developer on different modules of their web app.",
    links: [
      {
        label: "Company website",
        href: "https://www.order.siterecon.ai/",
      },
    ],
    categories: ["contract"],
  },
];
