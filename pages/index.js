import React, {useRef, useState} from "react";
import Head from "next/head";
import {InView} from "react-intersection-observer";

import HeroSection from "../src/components/HeroSection";
import NavBar from "../src/components/NavBar";
import WorkExperience from "../src/components/WorkExperience";
import Projects from "../src/components/Projects";
import Skills from "../src/components/Skills";
import Testimonials from "../src/components/Testimonials";
import Footer from "../src/components/Footer";
import {NavBarItemsType} from "../src/components/NavBar/types";

export default function Home() {
	const testimonialsRef = useRef(null);
	const workExperienceRef = useRef(null);
	const skillsRef = useRef(null);
	const [activeNavBarItem, setActiveNavBarItem] = useState(
		NavBarItemsType.ABOUT
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
				workExperienceRef.current.scrollIntoView({behavior: "smooth"});
				break;
			case NavBarItemsType.SKILLS:
				skillsRef.current.scrollIntoView({behavior: "smooth"});
				break;
			case NavBarItemsType.TESTIMONIALS:
				testimonialsRef.current.scrollIntoView({behavior: "smooth"});
				break;
		}
	};

	const handleSectionInView = (inView, section) => {
		if (inView) {
			setActiveNavBarItem(section);
		}
	};

	return (
		<div>
			<Head>
				<title>Md Shadab Alam</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar scrollTo={scrollTo} activeNavBarItem={activeNavBarItem} />
			<InView
				onChange={(inView) => {
					handleSectionInView(inView, NavBarItemsType.ABOUT);
				}}>
				<HeroSection />
			</InView>
			<InView
				onChange={(inView) => {
					handleSectionInView(inView, NavBarItemsType.WORK);
				}}>
				<WorkExperience sectionRef={workExperienceRef} />
			</InView>
			<Projects />
			<InView
				onChange={(inView) => {
					handleSectionInView(inView, NavBarItemsType.SKILLS);
				}}>
				<Skills sectionRef={skillsRef} />
			</InView>
			<InView
				onChange={(inView) => {
					handleSectionInView(inView, NavBarItemsType.TESTIMONIALS);
				}}>
				<Testimonials sectionRef={testimonialsRef} />
			</InView>
			<Footer scrollTo={scrollTo} />
		</div>
	);
}
