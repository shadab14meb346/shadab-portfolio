import {Typography} from "@material-ui/core";
import Head from "next/head";

import HeroSection from "../src/components/HeroSection";
import NavBar from "../src/components/NavBar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
		</div>
	);
}
