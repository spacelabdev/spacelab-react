import React from "react";
import "./about.scss";
import HeroImage from "../../components/heroImage/heroImage";
import AboutMissionStatementSection from "./aboutMissionStatementSection";
import AboutTeamSliderSection from "./aboutTeamSliderSection";
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
			<AboutMissionStatementSection/>
			<AboutTeamSliderSection/>
			<AboutHistorySection/>
			<Footer/>
		</>
	);
};
