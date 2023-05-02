import React from "react";
import Exoplanetarium from "../../assets/projectsAssets/exoplanetarium.svg";

/**
 * Renders image and intro description for the Projects page
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProjectsIntro() {
	return (
		<div className={"projects-main-container"}>
			<div className={"projects-exoplanetarium-logo"}>
				<img
					className={"exoplanetarium-logo"}
					src={Exoplanetarium}
					alt={""}
				/>
			</div>
			<p className={"exoplanetarium-paragraphs"}>
				Spacelab is a project with the goal to explore NASA/CallTech
				data from the TESS, Kepler and K2 Missions using various degrees
				of Machine Learning and Deep Natural Networks in the pursuit of
				Earth-Like planets around nearby stars in the Milky Way Galaxy.
			</p>
			<br />
			<p className={"exoplanetarium-paragraphs"}>
				Our short-term goal is to find objects on interest for
				professional Astronomers to explore, and to classify
				already-identified candidates that have not yet been classified
				as either exoplanets or false-positives by the astronomical
				community.
			</p>
		</div>
	);
}
