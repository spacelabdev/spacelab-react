import React from "react";
import "./home.scss";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function IntroductionSection() {
	return (
		<section className="introduction-section">
			<h2>Introduction Section</h2>
			<div className="content-container">
				<div className="images">
					<img
						src="https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,w_680/v1607377421/interiordesign/sidekix-media-lrk0l9w8rI0-unsplash_lql3f3.jpg"
						alt="Placeholder"
					/>
				</div>
				<div className="about">
					<h3>What is the Space Lab?</h3>
					<p>
						SpaceLab is a project with the goal to explore NASA/CalTech data
						from the TESS, Kepler and K2 Missions using various degrees of
						Machine Learning and Deep Neural Networks in the persuit of
						Earth-Like planets around nearby stars in the Milky Way Galaxy.
					</p>
					<p>
						Our short-term goal is to find objects of interest for professional
						Astronomers to explore, and to classify already-identified
						candidates that have not yet been classified as either exoplanets or
						false-positives by the astronomical community.
					</p>
				</div>
			</div>
		</section>
	);
}
