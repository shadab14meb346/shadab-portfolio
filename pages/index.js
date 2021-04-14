import Head from "next/head";

import HeroSection from "../src/components/HeroSection";
import NavBar from "../src/components/NavBar";
import WorkExperience from "../src/components/WorkExperience";

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
		</div>
	);
}
