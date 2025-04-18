import React from "react";
import "./about.scss";
import Navigation from "../../components/navigation/MainNavigation/MainNavigation";
import MissionVisionValuesSection from "./MissionVisionValuesSection";
import HistorySection from "./HistorySection";
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
			<HistorySection />
			<Footer />
		</div>
	);
}
