import React from "react";
import Exoplanetarium from "../../../../assets/homeAssets/ExoplanetariumExample.png";
// import planet from "../../../../assets/planet.svg";
import InternalNavButton from "../../../../components/styleComponents/navigationButtons/InternalNavButton";
import "./horizon.scss";

/**
 * Renders What's on the Horizon Section
 * @returns {JSX.Element}
 * @constructor
 */
export default function HorizonSection() {
	return (
		<section className="horizon-section">
			<div className="horizon-content-container">
				<div className="horizon-left-container">
					<h2>FUTURE EXPLORATIONS</h2>
					<p>
						Our current project, Exoplanetarium, uses <span title="National Aeronautics and Space Administration">NASA</span> satellite 
						mission data and convolutional neural networks to search for unclassified planetary
						candidates.
					</p>
					<p>
						Our team of volunteers come from different disciplines, including data science,
						front-end & back-end development, and <span title="Web Graphics Library">WebGL</span> development, 
						and collaborate to uncover potential exoplanets.
					</p>
					<div className="button-wrap">
						<InternalNavButton
							path="/projects"
							buttonText="View Projects"
						></InternalNavButton>
					</div>
				</div>
				<img src={Exoplanetarium} alt="planet" />
			</div>
		</section>
	);
}
