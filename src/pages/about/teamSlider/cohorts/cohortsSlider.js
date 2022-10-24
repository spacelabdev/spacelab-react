import React, {useState} from "react";
import SliderNav from "../sliderNav/sliderNav";
import SliderComponent from "../SliderComponent/sliderComponent";
import "./cohortsSlider.scss";
import {
	december2021Cohort,
	additionalContributors,
	cohortSliderNavLinks,
} from "../../aboutHelper";

/**
 * Renders cohort slider
 * @param toggle
 * @returns {JSX.Element}
 * @constructor
 */
export default function CohortsSlider({toggle}) {
	const [activeCohort, setActiveCohort] = useState('december2021');

	// Nav link data
	const {pastCohorts: teamLinks} = cohortSliderNavLinks;
	// Member card data
	const {title: december2021Title, members: december2021Members} = december2021Cohort;
	const {title: additionalContributorsTitle, members: additionalContributorMembers} = additionalContributors;

	return (
		<div id={'cohort-component-container'} className={toggle}>
			<SliderNav navObjects={teamLinks} activeSlide={activeCohort} setActive={setActiveCohort}/>
			<SliderComponent active={`${activeCohort === 'december2021' ? '' : 'hidden'}`}
			                 title={december2021Title}
			                 members={december2021Members}
			/>
			<SliderComponent active={`${activeCohort === 'additionalContributors' ? '' : 'hidden'}`}
			                 title={additionalContributorsTitle}
			                 members={additionalContributorMembers}
			/>
		</div>
	);
};
