import Head from "next/head";

import HeroSection from "../src/components/HeroSection";
import NavBar from "../src/components/NavBar";
import WorkExperience from "../src/components/WorkExperience";
import Projects from "../src/components/Projects";
import Skills from "../src/components/Skills";
// import Testimonials from "../src/components/Testimonials";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Md Shadab Alam</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<HeroSection />
			<WorkExperience />
			<Projects />
			<Skills />
			{/* <Testimonials /> */}
		</div>
	);
}
