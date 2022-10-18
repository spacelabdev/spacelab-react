import React from "react";
import "./about.scss";
import HeroImage from "../../components/heroImage/heroImage";
import AboutHistorySection from "./aboutHistorySection";
import MissionStatement from "./missionStatementSection";
import Team from "./TeamSection";
import Footer from "../../components/footer/footer";
import Slider from "./slider/Slider"

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
			<Slider />
			<Team/>
			<AboutHistorySection/>
			<Footer/>
		</>
	);
};
