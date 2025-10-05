export type ProductStatus =
  | "live"
  | "prototype"
  | "paused"
  | "dropped"
  | "failed"
  | "acquired"
  | "poc"
  | "closed"
  | "idea";

export interface ProductEntry {
  name: string;
  type: string;
  tagline: string;
  category: string;
  timeline: string;
  status: ProductStatus;
  statusNote?: string;
  website?: string;
  image?: string;
  video?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
  stageSummary: string;
  users?: string;
  revenueOutcome?: string;
  problem: string;
  solution: string;
  role: string;
  stack: string;
  highlights: string[];
  challenges: string;
  learnings: string;
  skills: string;
}

export const products: ProductEntry[] = [
  {
    name: "Sync Item Across Boards",
    type: "Product",
    tagline: "Keep a single item synced across many Monday boards",
    category: "Monday.com App",
    timeline: "2022",
    status: "failed",
    statusNote: "Marketplace review rejection",
    website: "https://zuribase.com/sync-item-across-boards",
    video:
      "https://screen-studio-shareable-links.67aa83ffa7fb557cd114a7156fca4e73.r2.cloudflarestorage.com/I2xQI3rk-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=363e5c20253db1195c87384f6dfb4c99%2F20251005%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251005T173625Z&X-Amz-Expires=7200&X-Amz-Signature=d5fa991e65dcab0e518c543134ec8a8b578ebd370dc759d6cb2583da4500d4b8&X-Amz-SignedHeaders=host&x-id=GetObject",
    stageSummary:
      "Marketplace-ready MVP rejected due to external review limits",
    users: "—",
    revenueOutcome: "₹1L cost (intern), ~5 months",
    problem: "Teams needed cross-board item sync in Monday",
    solution:
      "Built a clone of 'Same Item in Multiple Boards' so data stayed aligned across boards.",
    role: "Product, Eng, PM",
    stack: "React, Node, Prisma, Monday SDK",
    highlights: [
      "Shipped a polished app aligned with Monday UI",
      "Validated cross-board sync demand with early customers",
    ],
    challenges: "Platform dependency risk",
    learnings: "Validate platform dependency early",
    skills: "Product strategy, API integration, SaaS publishing",
    links: [
      {
        label: "Watch Demo",
        href: "https://screen-studio-shareable-links.67aa83ffa7fb557cd114a7156fca4e73.r2.cloudflarestorage.com/I2xQI3rk-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=363e5c20253db1195c87384f6dfb4c99%2F20251005%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251005T173625Z&X-Amz-Expires=7200&X-Amz-Signature=d5fa991e65dcab0e518c543134ec8a8b578ebd370dc759d6cb2583da4500d4b8&X-Amz-SignedHeaders=host&x-id=GetObject",
      },
    ],
  },
  {
    name: "MockFill",
    type: "Product",
    tagline: "Stop wasting time typing. Autofill forms instantly",
    category: "Chrome Extension",
    timeline: "2023 – Present",
    status: "live",
    website: "https://mockfill.com/",
    image: "/products/mockfill.png",
    video:
      "https://pub-7b607db1849d4834b25ec56d1f6204fa.r2.dev/mockfill-demo.mp4",
    stageSummary: "Early traction; adding AI context fill",
    users: "Thousands (developers/testers)",
    revenueOutcome: "Free (MVP)",
    problem: "Re-entering mock data slows dev & QA",
    solution:
      "Autofill extension with AI-generated dummy data that matches form context.",
    role: "Product, Design, Eng",
    stack: "TypeScript, React, MV3",
    highlights: [
      "Shipped polished UX with high relevance",
      "Adopted by dev teams for QA workflows",
    ],
    challenges: "Edge cases and monetization",
    learnings: "Ship value before perfect; niche wins",
    skills: "Chrome APIs, UX research, developer productivity",
  },
  {
    name: "Translate G Sheet TM",
    type: "Product",
    tagline:
      "Convert Google Sheets into 100+ languages without leaving the spreadsheet",
    category: "Google Workspace Add-on",
    timeline: "2024 – Present",
    status: "prototype",
    website: "/translategsheettm",
    image: "/products/Demo-Translate-G-Sheet-TM-Google-Sheets.png",
    video:
      "https://www.loom.com/embed/f2a17eac3d8e4019a0025fd9b0a3c524?sid=e50793f5-35b5-46c0-ac05-3a4f0669e6b3",
    stageSummary: "Polished marketing site live; add-on packaging in progress",
    problem:
      "Teams waste hours copying content between tools for localization.",
    solution:
      "Sidebar add-on that translates selected columns directly inside Google Sheets using Google Translate infrastructure.",
    role: "Product, Design, Engineering",
    stack: "Next.js, Tailwind CSS, Radix UI",
    highlights: [
      "Crafted a conversion-focused landing page with hero, FAQ, and demo flow",
      "Documented workflow steps and feature highlights for launch",
      "Reusable UI primitives wired into the main portfolio design system",
    ],
    challenges: "Marketplace app packaging and permissions setup still pending",
    learnings: "Storyboard the ideal onboarding before touching code",
    skills: "Product storytelling, UI design, component architecture",
  },
  {
    name: "AITweetMate",
    type: "Product",
    tagline: "Human-like tweet replies tailored to your tone",
    category: "Chrome Extension",
    timeline: "2024",
    status: "paused",
    website: "https://aitweetmate.vercel.app/",
    image: "/products/aitweetmate.png",
    stageSummary: "Paused post-backlash, archived for relaunch ideas",
    users: "~200 users",
    revenueOutcome: "—",
    problem: "Writing authentic replies on X is slow",
    solution:
      "AI generates tone-matched replies using tweet context and prompts.",
    role: "Product, Design, Marketing",
    stack: "Next.js, OpenAI API",
    highlights: ["Early interest from creators"],
    challenges: "Authenticity backlash on X",
    learnings: "Human + AI collaboration must feel natural",
    skills: "Prompt engineering, AI UX",
  },
  {
    name: "FocuslyAI",
    type: "Product",
    tagline: "AI-powered Slack notification manager",
    category: "Slack App",
    timeline: "2021",
    status: "dropped",
    website: "https://focuslyai.vercel.app/",
    image: "/products/billsplit-landing-page.png",
    stageSummary: "Dropped after validation round",
    problem: "Notification overload in Slack",
    solution: "AI prioritizes important messages and actions for teams.",
    role: "Product, Research, Design",
    stack: "Node.js, Slack Bolt, LLM",
    highlights: ["130+ user interviews"],
    challenges: "Security barriers, adoption friction",
    learnings: "Validate urgency before depth",
    skills: "Customer interviews, AI workflow design",
  },
  {
    name: "Fabpic",
    type: "Product",
    tagline: "Capture and beautify screenshots in seconds",
    category: "Web App",
    timeline: "2020 – Present",
    status: "live",
    website: "https://fabpic.app/",
    image: "/products/fabpic.png",
    stageSummary: "Actively improved post-feedback",
    revenueOutcome: "Some LTD sales",
    problem: "Raw screenshots lack polish for social sharing",
    solution:
      "Simple editor to style screenshots fast with presets and export options.",
    role: "Product, Design, Frontend",
    stack: "Next.js, Tailwind, Framer Motion",
    highlights: [
      "Built full product and generated LTD sales",
      "Iterated on conversion copy and onboarding",
    ],
    challenges: "Saturated market",
    learnings: "Niche positioning beats parity",
    skills: "Branding, conversion copywriting",
  },
  {
    name: "Rendercraft",
    type: "Product",
    tagline: "Bannerbear with better UX",
    category: "Concept / Web App",
    timeline: "2022",
    status: "idea",
    website: "https://rendercraft.softr.app/",
    image: "/products/rendercraft.png",
    stageSummary: "Landing-page-only prototype",
    problem: "Design automation tools lack UX clarity",
    solution:
      "Better visual UX for automated designs built with no-code tools.",
    role: "Product, Design",
    stack: "Softr, Figma",
    highlights: ["Great concept validation"],
    challenges: "Technically heavy",
    learnings: "Prototype before infrastructure",
    skills: "Design-led thinking",
  },
  {
    name: "PeekLetters",
    type: "Product",
    tagline: "Hyper-personalized cold emails as letters",
    category: "SaaS",
    timeline: "2021",
    status: "closed",
    website: "https://peekletters.vercel.app/",
    image: "/products/peekletters.png",
    stageSummary: "Earned revenue, validated offer",
    users: "~50 users",
    revenueOutcome: "₹30k",
    problem: "Cold outreach lacked personality",
    solution: "Auto-generated letter-style emails with personalization hooks.",
    role: "Product, Sales, Eng",
    stack: "Next.js, Node",
    highlights: ["First real revenue product"],
    challenges: "Poor conversion despite outreach",
    learnings: "Distribution channel matters more than idea",
    skills: "Cold email sales, automation",
  },
  {
    name: "Tweetflick",
    type: "Product",
    tagline: "Save and organize favorite tweets",
    category: "Web App",
    timeline: "2020",
    status: "acquired",
    website: "https://tweetflick.com/",
    image: "/products/tweetflick_dashboard.png",
    stageSummary: "Successful micro-acquisition",
    users: "10k+ users",
    revenueOutcome: "Sold for $5k",
    problem: "Bookmarking on Twitter lacks structure",
    solution: "Web app with tagging, collections, and search for saved tweets.",
    role: "Product, Design, Eng",
    stack: "React, Firebase",
    highlights: ["Got acquired by Googler"],
    challenges: "Scaling infra costs",
    learnings: "Build lean MVPs for validation",
    skills: "Product growth, early exit",
  },
  {
    name: "EaseData",
    type: "Product",
    tagline: "Sync team data into sheets",
    category: "SaaS Tool",
    timeline: "2022",
    status: "poc",
    image: "/products/easedata.png",
    stageSummary: "Early internal prototype only",
    problem: "Data scattered across tools",
    solution: "Unified access via APIs to HubSpot, databases, and Sheets.",
    role: "Engineering",
    stack: "Node, API integrations",
    highlights: ["POC functional"],
    challenges: "Complexity scope-creep",
    learnings: "Start narrow, expand later",
    skills: "API architecture, automation",
    website: "https://easedata-lp.vercel.app/",
  },
  {
    name: "Shoppable Feed App",
    type: "Product",
    tagline: "TikTok-style shoppable feeds for Shopify",
    category: "Shopify App",
    timeline: "2021",
    status: "dropped",
    image: "/products/shoppable-tiktok-feed.png",
    stageSummary: "Dropped after sandbox",
    problem: "Merchants wanted UGC-like feeds",
    solution: "Shopify app concept that surfaces UGC-style product feeds.",
    role: "Product, Design",
    stack: "Shopify, Liquid, JS",
    highlights: ["Resonated in concept"],
    challenges: "Shopify learning curve",
    learnings: "Learn ecosystem deeply before dev",
    skills: "E-commerce, product validation",
  },
  {
    name: "WordKhoj",
    type: "Side-Project",
    tagline: "Look up meanings without leaving the page",
    category: "Chrome Extension",
    timeline: "2020",
    status: "live",
    website:
      "https://chrome.google.com/webstore/detail/word-khoj/bdocoepjnibclhlibcccnjpgeknhdlah",
    image: "/products/word-Khoj-extension.png",
    stageSummary: "Still functional",
    users: "500+",
    revenueOutcome: "Free",
    problem: "Tab-switching breaks reading flow",
    solution: "Inline dictionary popup for quick meaning lookup.",
    role: "Engineering, UI",
    stack: "Vanilla JS",
    highlights: ["Useful and light"],
    challenges: "Modest retention",
    learnings: "Learned publishing workflow",
    skills: "Chrome APIs, UX polish",
  },
  {
    name: "BillSplit",
    type: "Side-Project",
    tagline: "Split team expenses inside Slack",
    category: "Slack App",
    timeline: "2020",
    status: "prototype",
    website: "https://billsplit.biryanilabs.com",
    image: "/products/billsplit-landing-page.png",
    stageSummary: "Internal project",
    users: "~15 users",
    problem: "Bill-splitting in chat is messy",
    solution: "Simple Slack command app to track shared expenses.",
    role: "Engineering",
    stack: "Node, Slack Bolt",
    highlights: ["Fun internal build"],
    challenges: "Narrow use-case",
    learnings: "Not all ideas need scaling",
    skills: "Slack API, collaboration",
  },
];
