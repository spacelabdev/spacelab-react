import React, {useState} from "react";
import CurrentTeamSlider from "./teamSlider/currentTeam/currentTeamSlider";
import CohortsSlider from "./teamSlider/cohorts/cohortsSlider";
import "./about.scss";

/**
 * Renders the Teams section on the About page
 * @returns {JSX.Element}
 * @constructor
 */
export default function AboutTeamSliderSection() {
	const [activeComponents, setActiveComponents] = useState(['currentTeam', 'currentTeamSlider']);

	const teamToggle = (buttonId) => {
		setActiveComponents([buttonId, `${buttonId}Slider`]);
	};

	return (
		<section id={'about-team-slider-section'}>
			<div className="team-slider-header">
				<h2 className="meet-our-team">Meet Our Team</h2>
			</div>
			<div className="about-team-toggle">
			</div>
			<CurrentTeamSlider id={'currentTeamSlider'}
			                   toggle={`${activeComponents[1] === 'currentTeamSlider' ? '' : 'hidden'}`}
			/>
			<CohortsSlider id={'pastCohortsSlider'}
			               toggle={`${activeComponents[1] === 'pastCohortsSlider' ? '' : 'hidden'}`}
			/>
		</section>
	);
};
