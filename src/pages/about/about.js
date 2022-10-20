import React from "react";
import "./about.scss";
import HeroImage from "../../components/heroImage/heroImage";
import MissionStatement from "./missionStatementSection";
import TeamSlider from "./teamSlider/teamSlider";
import AboutHistorySection from "./aboutHistorySection";
import Footer from "../../components/footer/footer";

/**
 * Renders About Page
 * @returns {JSX.Element}
 * @constructor
 */
export default function About() {
	return (
		<>
			<HeroImage heroTitle="ABOUT"/>
			<MissionStatement/>
			<TeamSlider />
			<AboutHistorySection/>
			<Footer/>
		</>
	);
};
