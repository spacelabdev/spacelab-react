import React from "react";
import "./cohortSliderNav.scss";

export default function CohortSliderNav({activeCohort, setActive}) {
	return (
		< div className={"menu"}>
			<div className={"cohorts-slider-nav-button-container"}>
				<div className={`${activeCohort === 'december2021' ? 'active' : ''}`}
				     onClick={() => setActive('december2021')}
				>
					Dec 2021
				</div>
			</div>
		</div>
	);
};
