export interface ICompanyDetails {
  name: string;
  website: string;
  color: string;
}
export interface IPastCompanyDetails {
  showInSite: boolean;
  positionInSite: number;
  basicDetails: ICompanyDetails;
  position: string;
  workDescription: string;
}

export const pastCompanies: IPastCompanyDetails[] = [
  {
    showInSite: true,
    positionInSite: 1,
    basicDetails: {
      name: "The Cumin Club",
      website: "https://www.thecuminclub.com/",
      color: "rgb(212, 106, 25)",
    },
    position: "Backend Developer, Freelancer",
    workDescription:
      "Built their backend from scratch. Used NodeJS, TypeScript, AWS, Serverless, PostGres & GraphQL",
  },
  {
    showInSite: true,
    positionInSite: 1,
    basicDetails: {
      name: "Quorilla",
      website: "https://quorilla.com/",
      color: "rgb(127,227,162)",
    },
    position: "Frontend Developer, Full Time",
    workDescription:
      "Integrated the https://tokbox.com/ for two way video calling and custom design the component for the Quorilla platform using React Functional Components, Redux, and TypeScript to allow educators to stream classes from the browser. Wrote various frontend modules like educators profile, students profile, search results page, social module.",
  },
  {
    showInSite: true,
    positionInSite: 2,
    basicDetails: {
      name: "Siterecon",
      website: "https://order.siterecon.ai/",
      color: "#FFD02B",
    },
    position: "Frontend Developer, Freelancer",
    workDescription:
      "Worked as a freelancer frontend developer on different modules of their web app.",
  },
  {
    showInSite: true,
    positionInSite: 3,
    basicDetails: {
      name: "Tweetflick",
      website: "https://tweetflick.com/",
      color: "rgb(102,80,213)",
    },
    position: "Co Founder",
    workDescription:
      "Worked on Tweetflick as a side project. Handled all kind of things: Full-stack development, Product related decisions, and much more.",
  },
  {
    showInSite: true,
    positionInSite: 4,
    basicDetails: {
      name: "Publaunch",
      website: "https://publaunch.com/",
      color: "rgb(227,71,52)",
    },
    position: "Frontend Developer, Freelancer",
    workDescription:
      "Worked as a freelancer frontend developer and developed a few modules of their web app.",
  },
  {
    showInSite: true,
    positionInSite: 5,
    basicDetails: {
      name: "TCS",
      website: "https://www.tcs.com/",
      color: "#5F68C3",
    },
    position: "Full Stack Developer, Full Time",
    workDescription:
      "I started my career of Software Engineer from TCS and here I worked as Full stack developer.",
  },
  {
    showInSite: true,
    positionInSite: 6,
    basicDetails: {
      name: "Geekflare  Assist",
      website: "https://geekflare.com/assist/",
      color: "#ff4e00",
    },
    position: "Full Stack Developer, Freelancer",
    workDescription:
      "GeekFlare Assist is a chat bot powered by GPT-3 using Open AI APIs designed to answer questions specifically about Unix, SQL & DevOps. Wrote APIs using GraphQL with Nodejs & developed frontend using NextJs",
  },
];
