import React from "react";
import "./About.scss";
import Navigation from "../../components/navigation/MainNavigation/MainNavigation";
import MissionVisionValuesSection from "./MissionVisionValuesSection";
import OurTeamSection from "./OurTeamSection";
import HistorySection from "./HistorySection/History";
import Footer from "../../components/Footer/Footer";

/**
 * Renders About Page
 * @returns {JSX.Element}
 * @constructor
 */
export default function About() {
	return (
		<div id="about">
			<Navigation />
			<MissionVisionValuesSection />
			<OurTeamSection />
			<HistorySection />
			<Footer />
		</div>
	);
}
