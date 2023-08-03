import React from "react";
import "./about.scss";
import HeroImage from "../../components/HeroImage/HeroImage";
import AboutMissionStatementSection from "./AboutMissionStatementSection";
import AboutTeamSliderSection from "./AboutTeamSliderSection";
import History from "./History/History";
import Footer from "../../components/Footer/Footer";

/**
 * Renders About Page
 * @returns {JSX.Element}
 * @constructor
 */
export default function About() {
	return (
		<>
			<HeroImage heroTitle="ABOUT" />
			<AboutMissionStatementSection />
			<AboutTeamSliderSection />
			<History />
			<Footer />
		</>
	);
}
