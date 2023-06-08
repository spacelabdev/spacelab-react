import "./WhatWereWorkingOnV2.scss";
import exoplanetariumImage from "../../assets/exoplanetarium.png";
import BackgroundImage from "../../assets/workingon-bg.png";

export default function WhatWereWorkingOnV2() {
	return (
		<section
			className="participate-section p-what-were-working-on"
			style={{ backgroundImage: `url(${BackgroundImage})` }}
		>
			<div>
				<h2>What We're Working On</h2>
			</div>

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
