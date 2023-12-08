import React from "react";
import Exoplanetarium from "../../../../assets/homeAssets/Exoplanetarium.png";
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
					<h2>What's On The Horizon</h2>
					<p>
						Our current project, the Exoplanetarium, focuses on
						using data from previous and current <span title="National Aeronautics and Space Administration">NASA</span> satellite
						missions in a convolutional neural network to search for
						additional planetary candidates that went unclassified
						by <span title="National Aeronautics and Space Administration">NASA</span>. Our volunteers come from different disciplines,
						including data scientists, front-end developers, <span title="Web Graphics Library">WebGL</span> developers, and back-end developers, who collaborate and
						use innovative problem-solving to find potential
						exoplanets.
					</p>
				</div>
				<div className="horizon-right-container">
					<img src={Exoplanetarium} alt="planet" />
				</div>
			</div>
			<div className="button-wrap">
				<InternalNavButton
					path="/projects"
					buttonText="Our Projects"
				></InternalNavButton>
			</div>
		</section>
	);
}
