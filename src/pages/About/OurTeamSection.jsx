import React from "react";
import CurrentTeamSlider from "./OurTeamSection/CurrentTeamSlider/CurrentTeamSlider";
import CohortsSlider from "./OurTeamSection/CohortsSlider/CohortsSlider";

/**
 * Renders the Teams section on the About page
 * @returns {JSX.Element}
 * @constructor
 */
export default function OurTeamSection() {
	return (
		<section id="our-team-container">
			<h2 className="our-team-title">OUR TEAM</h2>
			<CurrentTeamSlider
				id={"currentTeamSlider"}
				toggle="currentTeamSlider"
			/>
			<CohortsSlider id={"pastCohortsSlider"} toggle="hidden" />
		</section>
	);
}
