import React from "react";
import './about.scss';
import HeroImage from "../../components/heroImage/heroImage";
import AboutHistorySection from "./aboutHistorySection";
import MissionStatement from "./missionStatementSection";
import Team from "./TeamSection";
import Footer from "../../components/footer/footer";

/**
 * Renders About Page
 * @returns {JSX.Element}
 * @constructor
 */
export default function About() {
	const displayText = "About";
	return (
		<>
			<HeroImage displayText={displayText}/>
			<Team/>
			<MissionStatement/>
			<AboutHistorySection/>
			<Footer/>
		</>
	);
};