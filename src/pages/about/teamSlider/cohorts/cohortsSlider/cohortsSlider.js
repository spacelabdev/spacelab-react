import React, {useState} from "react";
import CohortSliderNav from "../cohortSliderNav/cohortSliderNav";
import SliderComponent from "../../SliderComponent/sliderComponent";
import "./cohortsSlider.scss";
import {december2021Cohort, additionalContributors} from "../../../aboutHelper";

export default function CohortsSlider({toggle}) {
	const [activeCohort, setActiveCohort] = useState('december2021');

	const {title: december2021Title, members: december2021Members} = december2021Cohort;
	const {title: additionalContributorsTitle, members: additionalContributorMembers} = additionalContributors;

	return (
		<div id={'cohort-component-container'} className={toggle}>
			<CohortSliderNav activeCohort={activeCohort} setActive={setActiveCohort}/>
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
