import React, { useRef, useState } from "react";
import Head from "next/head";
import { InView } from "react-intersection-observer";

import HeroSection from "../src/components/HeroSection";
import NavBar from "../src/components/NavBar";
import WorkExperience from "../src/components/WorkExperience";
import Projects from "../src/components/Projects";
import Skills from "../src/components/Skills";
import Testimonials from "../src/components/Testimonials";
import Footer from "../src/components/Footer";
import Stories from "../src/components/Stories";
import SideProjects from "../src/components/SideProjects";
import { NavBarItemsType } from "../src/components/NavBar/types";
import { heroSection } from "../src/portfolioContents/heroSection";

export default function Home() {
  const testimonialsRef = useRef(null);
  const workExperienceRef = useRef(null);
  const skillsRef = useRef(null);
  const storiesRef = useRef(null);
  const sideProjectsRef = useRef(null);
  const footerRef = useRef(null);
  const [activeNavBarItem, setActiveNavBarItem] = useState(
    NavBarItemsType.ABOUT,
  );

  const scrollTo = (itemName) => {
    switch (itemName) {
      case NavBarItemsType.ABOUT:
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
      case NavBarItemsType.WORK:
        workExperienceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case NavBarItemsType.SIDE_PROJECTS:
        sideProjectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case NavBarItemsType.SKILLS:
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case NavBarItemsType.TESTIMONIALS:
        testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case NavBarItemsType.FOOTER:
        footerRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case NavBarItemsType.STORIES:
        storiesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  const handleSectionInView = (inView, section) => {
    if (inView) {
      setActiveNavBarItem(section);
    }
  };

  const seoContent = {
    title: "Md Shadab Alam | Full Stack Developer",
    imageURL:
      "https://i.ibb.co/K2NJ6kC/screenshot-localhost-3000-2021-05-25-20-10-58.png",
    description: heroSection.description,
    domain: "mohdshadab.com",
    websiteURL: "https://www.mohdshadab.com/",
  };

  return (
    <div>
      <Head>
        <title>{seoContent.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={seoContent.description} />
        <meta property="og:url" content={seoContent.websiteLink} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoContent.title} />
        <meta property="og:description" content={seoContent.description} />
        <meta property="og:image" content={seoContent.imageURL} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={seoContent.domain} />
        <meta property="twitter:url" content={seoContent.websiteURL} />
        <meta name="twitter:title" content={seoContent.title} />
        <meta name="twitter:description" content={seoContent.description} />
        <meta name="twitter:image" content={seoContent.imageURL} />
        <meta
          name="google-site-verification"
          content="K_41ZKqHv564ii78LADX1pwJLVUfL0ozNPKRxu5YHUg"
        />
      </Head>
      <NavBar scrollTo={scrollTo} activeNavBarItem={activeNavBarItem} />
      <InView
        onChange={(inView) => {
          handleSectionInView(inView, NavBarItemsType.ABOUT);
        }}
      >
        <HeroSection />
      </InView>
      <InView
        onChange={(inView) => {
          handleSectionInView(inView, NavBarItemsType.WORK);
        }}
      >
        <WorkExperience sectionRef={workExperienceRef} />
      </InView>
      <InView
        onChange={(inView) => {
          handleSectionInView(inView, NavBarItemsType.SIDE_PROJECTS);
        }}
      >
        <SideProjects sectionRef={sideProjectsRef} />
      </InView>
      <InView
        onChange={(inView) => {
          handleSectionInView(inView, NavBarItemsType.SKILLS);
        }}
      >
        <Skills sectionRef={skillsRef} />
      </InView>
      <InView
        onChange={(inView) => {
          handleSectionInView(inView, NavBarItemsType.TESTIMONIALS);
        }}
      >
        <Testimonials sectionRef={testimonialsRef} />
      </InView>

      <InView
        onChange={(inView) => {
          handleSectionInView(inView, NavBarItemsType.STORIES);
        }}
      >
        <Stories sectionRef={storiesRef} />
      </InView>
      <InView
        onChange={(inView) => {
          handleSectionInView(inView, NavBarItemsType.FOOTER);
        }}
      >
        <Footer scrollTo={scrollTo} sectionRef={footerRef} />
      </InView>
    </div>
  );
}
