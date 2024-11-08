import React from "react";
import "./about.scss";
import Navigation from "../../components/navigation/MainNavigation/MainNavigation";
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
			<Navigation />
			<AboutMissionStatementSection />
			<AboutTeamSliderSection />
			<History />
			<Footer />
		</>
	);
}
