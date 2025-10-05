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
    tagline: "Keep one item in sync across multiple Monday boards in real time",
    category: "Monday.com App",
    timeline: "2022",
    status: "failed",
    statusNote: "Rejected during Monday marketplace review",
    website: "https://zuribase.com/sync-item-across-boards",
    video:
      "https://screen-studio-shareable-links.67aa83ffa7fb557cd114a7156fca4e73.r2.cloudflarestorage.com/I2xQI3rk-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=363e5c20253db1195c87384f6dfb4c99%2F20251005%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251005T173625Z&X-Amz-Expires=7200&X-Amz-Signature=d5fa991e65dcab0e518c543134ec8a8b578ebd370dc759d6cb2583da4500d4b8&X-Amz-SignedHeaders=host&x-id=GetObject",
    stageSummary:
      "Built a marketplace-ready app that synced items, subitems, updates and matching columns across boards; blocked by platform review constraints",
    users: "Beta tests with small teams",
    revenueOutcome: "₹1L build cost (intern), ~5 months",
    problem:
      "Maintaining the same task across many boards meant manual duplication and constant desync",
    solution:
      "An item-linking app that mirrored structure and values across boards so any change (status, dates, updates, subitems) reflected everywhere instantly",
    role: "Product, Eng, PM",
    stack: "React, Node, Prisma, Monday SDK",
    highlights: [
      "Polished native-like UI and item view plus automation ‘recipes’",
      "Validated cross-board sync demand with PMs and project teams",
    ],
    challenges:
      "Hard platform limitations during marketplace review and permission model",
    learnings:
      "De-risk platform bets early; validate API/permission ceilings before deep build",
    skills:
      "Product strategy, marketplace integration, API architecture, SaaS UX",
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
    tagline: "Stop retyping dummy data — autofill forms in one click",
    category: "Chrome Extension",
    timeline: "2023 – Present",
    status: "live",
    website: "https://mockfill.com/",
    image: "/product/mockfill.png",
    video:
      "https://pub-7b607db1849d4834b25ec56d1f6204fa.r2.dev/mockfill-demo.mp4",
    stageSummary:
      "Growing dev/QA usage; expanding input coverage and AI context-fill",
    users: "Thousands (developers/testers)",
    revenueOutcome: "Free (MVP)",
    problem:
      "Developers and QA waste time typing names, emails and sample values while testing flows",
    solution:
      "A browser extension that detects inputs and fills realistic mock data (field-by-field or entire form) with optional AI context",
    role: "Product, Design, Eng",
    stack: "TypeScript, React, MV3",
    highlights: [
      "Fast UX with visible injection controls and reliable autofill",
      "Adopted in QA workflows and internal dev loops",
    ],
    challenges: "Edge cases on custom components; monetization strategy",
    learnings:
      "Deliver time savings immediately; monetize after strong utility",
    skills: "Chrome APIs, UX research, developer productivity",
  },
  {
    name: "Translate G Sheet TM",
    type: "Product",
    tagline:
      "Translate Google Sheets content to 100+ languages without leaving the sheet",
    category: "Google Workspace Add-on",
    timeline: "2024 – Present",
    status: "prototype",
    website: "/translategsheettm",
    image: "/product/Demo-Translate-G-Sheet-TM-Google-Sheets.png",
    video:
      "https://www.loom.com/embed/f2a17eac3d8e4019a0025fd9b0a3c524?sid=e50793f5-35b5-46c0-ac05-3a4f0669e6b3",
    stageSummary:
      "Marketing site and demo live; packaging as Workspace add-on next",
    problem:
      "Teams copy/paste between tools to localize content, creating errors and rework",
    solution:
      "A Sheets sidebar that translates selected columns in-place using Google’s translation infrastructure",
    role: "Product, Design, Engineering",
    stack: "Next.js, Tailwind CSS, Radix UI",
    highlights: [
      "Conversion-focused landing page (hero, demo, FAQs)",
      "Documented onboarding and feature flows for launch",
      "Reusable UI primitives integrated with portfolio design system",
    ],
    challenges: "Add-on scopes, review and permissions setup",
    learnings: "Story-map onboarding before code; design the happy path first",
    skills: "Product storytelling, UI design, component architecture",
  },
  {
    name: "AITweetMate",
    type: "Product",
    tagline: "AI reply suggestions that match your tone on X",
    category: "Chrome Extension",
    timeline: "2024",
    status: "live",
    website: "https://aitweetmate.vercel.app/",
    image: "/product/aitweetmate.png",
    stageSummary:
      "Paused after authenticity backlash; exploring human-in-the-loop relaunch",
    users: "~200 users",
    revenueOutcome: "—",
    problem: "Replying thoughtfully at scale on X is time-consuming",
    solution:
      "Tone-matched reply suggestions using tweet context and prompts, with quick editing before posting",
    role: "Product, Design, Marketing",
    stack: "Next.js, OpenAI API",
    highlights: ["Early creator interest and feedback loops"],
    challenges: "Perceived authenticity; UX must keep user in control",
    learnings: "AI assistance should feel collaborative, not automated",
    skills: "Prompt design, AI UX, creator workflows",
  },
  {
    name: "FocuslyAI",
    type: "Product",
    tagline: "Cut Slack noise — surface what actually needs you",
    category: "Slack App",
    timeline: "2021",
    status: "dropped",
    website: "https://focuslyai.vercel.app/",
    image: "/product/billsplit-landing-page.png",
    stageSummary: "Dropped post-validation after extensive interviews",
    problem: "Teams drown in Slack notifications and miss priorities",
    solution:
      "AI-assisted prioritization, catch-up views and ticket creation from Slack",
    role: "Product, Research, Design",
    stack: "Node.js, Slack Bolt, LLM",
    highlights: ["130+ user interviews and problem discovery"],
    challenges: "Security concerns and low perceived urgency",
    learnings: "Intensity of pain matters more than elegance of solution",
    skills: "Customer interviews, JTBD, workflow design",
  },
  {
    name: "Fabpic",
    type: "Product",
    tagline: "Turn raw screenshots into clean, shareable mockups in seconds",
    category: "Web App",
    timeline: "2020 – Present",
    status: "live",
    website: "https://fabpic.app/",
    image: "/product/fabpic.png",
    stageSummary: "Live with LTD sales; iterating on templates and export",
    revenueOutcome: "Some LTD sales",
    problem: "Unstyled screenshots look messy in docs, decks and social posts",
    solution:
      "A lightweight editor with presets (backgrounds, frames, shadows, text) for fast, consistent visuals",
    role: "Product, Design, Frontend",
    stack: "Next.js, Tailwind, Framer Motion",
    highlights: [
      "Built end-to-end and shipped monetized version",
      "Improved onboarding and conversion copy via iterations",
    ],
    challenges: "Crowded design tooling market",
    learnings: "Differentiate with speed + opinionated templates",
    skills: "Branding, conversion copy, growth loops",
  },
  {
    name: "Rendercraft",
    type: "Product",
    tagline: "Automated creative generation with a friendlier UX",
    category: "Concept / Web App",
    timeline: "2022",
    status: "idea",
    website: "https://rendercraft.softr.app/",
    image: "/product/rendercraft.png",
    stageSummary: "Concept validated; paused at landing-page prototype",
    problem: "Creative automation tools feel powerful but clunky to operate",
    solution:
      "A cleaner, guided interface for generating banners and visuals via templates",
    role: "Product, Design",
    stack: "Softr, Figma",
    highlights: ["Clear concept resonance in early feedback"],
    challenges: "High technical lift to reach parity with incumbents",
    learnings: "Prototype UX fast; validate before infra commitments",
    skills: "Design-led thinking, rapid validation",
  },
  {
    name: "PeekLetters",
    type: "Product",
    tagline: "Letter-style cold emails that feel personal",
    category: "SaaS",
    timeline: "2021",
    status: "closed",
    website: "https://peekletters.vercel.app/",
    image: "/product/peekletters.png",
    stageSummary:
      "Earned revenue, proved willingness to pay; closed after channel tests",
    users: "~50 users",
    revenueOutcome: "earned around $300",
    problem: "Cold outreach sounded robotic and failed to convert",
    solution:
      "Automated, personalized ‘letter’ emails with hooks tailored to recipient context",
    role: "Product, Sales, Eng",
    stack: "Next.js, Node",
    highlights: ["First paid product; hands-on sales and onboarding"],
    challenges: "Low conversion despite 500+ cold touches",
    learnings: "Channel–message fit matters as much as product",
    skills: "Outbound sales, automation, customer discovery",
  },
  {
    name: "Tweetflick",
    type: "Product",
    tagline: "Save, tag and search your favorite tweets",
    category: "Web App",
    timeline: "2020",
    status: "acquired",
    website: "https://tweetflick.com/",
    image: "/product/tweetflick_dashboard.png",
    stageSummary: "Built → scaled to meaningful usage → micro-acquired",
    users: "10k+ users",
    revenueOutcome: "Sold for $5k",
    problem: "Twitter bookmarks are flat lists with no organization",
    solution:
      "A tweet manager with tagging, collections and fast search to organize saved content",
    role: "Product, Design, Eng",
    stack: "React, Firebase",
    highlights: ["Acquired by a Googler; clean UX and clear utility"],
    challenges: "Cost to scale features and infra for power users",
    learnings: "Small, sharp tools can exit if they nail a niche",
    skills: "Product growth, lightweight tech for exit",
  },
  {
    name: "EaseData",
    type: "Product",
    tagline: "Give teams self-serve access to data (without pipelines)",
    category: "SaaS Tool",
    timeline: "2022",
    status: "poc",
    image: "/product/easedata.png",
    stageSummary:
      "POC of connectors + query + export; validated pain internally",
    problem:
      "Team data is siloed across HubSpot/DBs/Sheets; non-tech users can’t access it fast",
    solution:
      "A connector + query layer that pulls live data into shareable exports (Sheets/PDF/CSV) without engineering tickets",
    role: "Engineering",
    stack: "Node, API integrations",
    highlights: ["Working prototype with early demos"],
    challenges: "Connector maintenance scope and ICP clarity",
    learnings: "Start vertical-first; expand connectors after traction",
    skills: "API design, data integration, automation",
    website: "https://easedata-lp.vercel.app/",
  },
  {
    name: "Shoppable Feed App",
    type: "Product",
    tagline: "UGC-style, shoppable feeds for Shopify catalogs",
    category: "Shopify App",
    timeline: "2021",
    status: "dropped",
    image: "/product/shoppable-tiktok-feed.png",
    stageSummary: "Concept resonated; paused during ecosystem ramp-up",
    problem: "Merchants wanted TikTok-like, shoppable product feeds",
    solution: "A Shopify app to build UGC-style product feeds and link to PDPs",
    role: "Product, Design",
    stack: "Shopify, Liquid, JS",
    highlights: ["Strong early interest from demos"],
    challenges: "Steep ecosystem learning curve and technical scope",
    learnings: "Absorb platform constraints before deep implementation",
    skills: "E-commerce thinking, product validation",
  },
  {
    name: "WordKhoj",
    type: "Side-Project",
    tagline: "Look up meanings without losing reading flow",
    category: "Chrome Extension",
    timeline: "2020",
    status: "live",
    website:
      "https://chrome.google.com/webstore/detail/word-khoj/bdocoepjnibclhlibcccnjpgeknhdlah",
    image: "/product/word-Khoj-extension-img.png",
    stageSummary: "Lightweight, still functional",
    users: "500+",
    revenueOutcome: "Free",
    problem: "Tab-switching for definitions breaks focus",
    solution: "Inline dictionary popover that fetches meanings on page",
    role: "Engineering, UI",
    stack: "Vanilla JS",
    highlights: ["Published to Chrome Web Store; simple and useful"],
    challenges: "Retention is modest for single-purpose tools",
    learnings: "Shipping teaches more than polishing",
    skills: "Chrome APIs, micro-UX",
  },
  {
    name: "BillSplit",
    type: "Side-Project",
    tagline: "Split team expenses right inside Slack",
    category: "Slack App",
    timeline: "2020",
    status: "prototype",
    website: "https://billsplit.biryanilabs.com",
    image: "/product/billsplit-landing-page.png",
    stageSummary: "Internal prototype used by a small group",
    users: "~15 users",
    problem: "Expense splits in chat get lost and messy",
    solution: "Slash-commands to add, track and settle shared expenses",
    role: "Engineering",
    stack: "Node, Slack Bolt",
    highlights: ["Fast build that solved a local team problem"],
    challenges: "Narrow use-case; limited beyond internal teams",
    learnings: "Not every idea needs to scale — prototypes can still delight",
    skills: "Slack API, collaboration",
  },
];
