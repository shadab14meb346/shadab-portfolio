import React, {useRef} from "react";
import Head from "next/head";

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

	return (
		<div>
			<Head>
				<title>Md Shadab Alam</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar scrollTo={scrollTo} />
			<HeroSection />
			<WorkExperience sectionRef={workExperienceRef} />
			<Projects />
			<Skills sectionRef={skillsRef} />
			<Testimonials sectionRef={testimonialsRef} />
			<Footer />
		</div>
	);
}
