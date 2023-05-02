import React from "react";
import CurrentTeamSlider from "./teamSlider/currentTeam/currentTeamSlider";
import CohortsSlider from "./teamSlider/cohorts/cohortsSlider";
import "./about.scss";

/**
 * Renders the Teams section on the About page
 * @returns {JSX.Element}
 * @constructor
 */
export default function AboutTeamSliderSection() {
	return (
		<section id={"about-team-slider-section"}>
			<div className="team-slider-header">
				<h2 className="meet-our-team">Meet Our Team</h2>
			</div>
			<CurrentTeamSlider
				id={"currentTeamSlider"}
				toggle="currentTeamSlider"
			/>
			<CohortsSlider id={"pastCohortsSlider"} toggle="hidden" />
		</section>
	);
}
