import React, {useState} from "react";
import CurrentTeamSlider from "./currentTeamSlider";
import CohortTeamSlider from "./cohortSlider";
import "./teamSlider.scss";

export default function TeamSlider() {
	const [activeComponents, setActiveComponents] = useState(['currentTeam', 'currentTeamSlider']);

	const teamToggle = (buttonId) => {
		setActiveComponents([buttonId, `${buttonId}Slider`]);
	};

	return (
		<section id={'about-team-slider-container'}>
			<div className="team-slider-header">
				<h2 className="meet-our-team">Meet Our Team</h2>
			</div>
			<div className="about-team-toggle">
				<button id={'currentTeam'}
				        className={`toggle-button ${activeComponents[0] === 'currentTeam' ? 'active' : 'inactive'}`}
				        onClick={() => teamToggle('currentTeam')}
				>Current Team</button>
				<button id={'pastCohorts'}
				        className={`toggle-button ${activeComponents[0] === 'pastCohorts' ? 'active' : 'inactive'}`}
				        onClick={() => teamToggle('pastCohorts')}
				>Past Cohorts</button>
			</div>
			<CurrentTeamSlider id={'currentTeamSlider'}
			                   toggle={`${activeComponents[1] === 'currentTeamSlider' ? '' : 'hidden'}`}
			/>
			<CohortTeamSlider id={'pastCohortsSlider'}
			                  toggle={`${activeComponents[1] === 'pastCohortsSlider' ? '' : 'hidden'}`}
			/>
		</section>
	);
};
