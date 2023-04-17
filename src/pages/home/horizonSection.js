import React from "react";
import planet from "../../assets/planet.svg";
import "./home.scss";

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
					<h2>What's on the horizon</h2>
					<p>
						Our current project, the Exoplanetarium, focuses on
						using data from previous and current NASA satellite
						missions in a convolutional neural network to search for
						additional planetary candidates that went unclassified
						by NASA. Our volunteers come from different disciplines,
						including data scientists, front-end developers, WebGL
						developers, and back-end developers, who collaborate and
						use innovative problem-solving to find potential
						exoplanets.
					</p>
				</div>
				<div className="horizon-right-container">
					<div>EXOPLANETARIUM</div>
					<img src={planet} alt="planet" />
				</div>
			</div>
			<div className="button-wrap">
				<button>
					<a href="/about">Our Projects</a>
				</button>
			</div>
		</section>
	);
}
