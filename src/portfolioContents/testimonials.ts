export interface ITestimonial {
  givenBy: {
    name: string;
    linkedInProfile: string;
    imageFileName: string;
  };
  content: string;
}
export const testimonials: ITestimonial[] = [
  {
    givenBy: {
      name: "Miguel Prieto",
      linkedInProfile: "https://www.linkedin.com/in/jmigueprieto/",
      imageFileName: "jmigueprieto.jpeg",
    },
    content: `Shadab is an amazing software engineer! Not only he is a great problem-solver and a skillful software developer; he is also a very dedicated, motivated and positive one.

He is a doer, he is adaptable and he is constantly looking for ways to improve things. He is a team player. He produces quality code at a great speed and with a smile. It's just a pleasure to work with someone that has the skills and enthusiasm that Shadab has.`,
  },
  {
    givenBy: {
      name: "Rishabh Garg",
      linkedInProfile: "https://www.linkedin.com/in/rishabhgarg7/",
      imageFileName: "rishabh-garg.jpeg",
    },
    content: `I worked with Shadab as partner on our indie product called
				Tweetflick. He's good javascript and react developer and was able to
				build new features and requests in record time. He's a fast learner and
				able to pick up new things pretty fast which is too much important in a
        startup kind of ecosystem.`,
  },
  {
    givenBy: {
      name: "Tabrez Khan",
      linkedInProfile: "https://www.linkedin.com/in/iamtabrezkhan/",
      imageFileName: "tabrez_khan.jpeg",
    },
    content: `Shadab and I met at Pesto, where we were both enrolled in the same batch. We had worked together on previous projects before joining as well. He is an excellent programmer with skills across JavaScript frameworks like ReactJS and NodeJS; he also proved his leadership abilities by taking ownership of tasks while mentoring other devs when they needed help. Not only does Shadab have a knack for programming clean code that is easy to maintain, but he's one heck of a cool guy too!`,
  },
  {
    givenBy: {
      name: "Sravani Akuthota",
      linkedInProfile: "https://www.linkedin.com/in/sravani-akuthota/",
      imageFileName: "sravani-akuthota.jpeg",
    },
    content: `Shadab is great frontend developer and so much passionate on what he is doing. We were part of the same group but didn't work together, but we still kept in touch after leaving the company and have some amazing discussions on different subjects. He is so much interested in helping dev community and also mentored in bootstrapping my web developing journey. All in all he is an amazing friend and a cheerful guy.`,
  },
  {
    givenBy: {
      name: "Pavan Kumar Raju Chamarthi",
      linkedInProfile:
        "https://www.linkedin.com/in/pavan-kumar-raju-chamarthi-154389125/",
      imageFileName: "pavan-kumar-raju-chamarthi.jpeg",
    },
    content: `I worked with Md Shadab Alam in the same team on the same project in which he was a backend and blockchain developer. He has great problem-solving skills. He is a very dedicated developer, whatever tasks he was assigned he accomplish it always. Even as a fresher in the team he had a great attitude to take up responsibilities and get it done.`,
  },
];
