import "./WhatWereWorkingOn.scss";
import exoplanetariumImage from "../assets/exoplanetarium.png";

export default function WhatWereWorkingOn() {
	return (
		<section className="participate-section what-were-working-on">
			<h2>What We're Working On</h2>
			<img src={exoplanetariumImage} alt="Exoplanetarium" />
			<p>
				Our current project, the Exoplanetarium, focuses on using data
				from previous and current NASA satellite missions in a
				convolutional neural network to search for additional planetary
				candidates that went unclassified by NASA.
			</p>
		</section>
	);
}
