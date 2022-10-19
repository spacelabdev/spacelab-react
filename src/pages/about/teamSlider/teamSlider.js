import React from "react";
import CurrentTeamSlider from "./currentTeamSlider";
import CohortTeamSlider from "./cohortSlider";
import SimpleButton from "../../../components/button/simpleButton";
import "./teamSlider.scss";

export default function TeamSlider() {

	return (
		<section id={'about-team-slider-container'}>
			<div className="team-slider-header">
				<h2 className="meet-our-team">Meet Our Team</h2>
				<div className="about-team-toggle">
					<SimpleButton buttonName='Current Cohort'/>
					<SimpleButton buttonName='Past Cohorts'/>
				</div>
			</div>
			<CurrentTeamSlider />
			<CohortTeamSlider />
		</section>
	);
};
