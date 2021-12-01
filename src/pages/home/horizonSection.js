import React from "react";
import planet from "../../assets/planet.svg";
import "./home.scss";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function HorizonSection() {
	return (
		<section className="horizon-section">
			<div className="horizon-content-container">
				<div className="horizon-left-container">
					<div>Whats on the horizon</div>
					<p>
						Our current project, the Exoplanetarium, focuses on
						using data from previous and current NASA satellite
						missions in a convolutional neural network to search for
						additional planetary candidates that went unclassified
						by NASA. Our volunteers come from different disciplines,
						including data scientists, front-end developers, WebGL
						developers, and back-end developers, who collaborate and
						use innovation problem-solving to find more exoplanets.
					</p>
				</div>
				<div className="horizon-right-container">
					<div>EXOPLANETARIUM</div>
					<img src={planet} alt="planet" />
				</div>
			</div>
		</section>
	);
}
