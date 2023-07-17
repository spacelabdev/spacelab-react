import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import Footer from "../../components/Footer/Footer";
import "./Projects.scss";
import ExoplanetariumLogo from "../../assets/projectsAssets/exoplanetarium.svg";
import Exoplanetarium from "../../assets/projectsAssets/Exoplanetarium.png";

/**
 * Renders Projects Page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Projects() {
	return (
		<>
			<HeroImage heroTitle="PROJECTS" />
			<div className={"projects-main-container"}>
				<div className={"projects-exoplanetarium-logo"}>
					<img
						className={"exoplanetarium-logo"}
						src={ExoplanetariumLogo}
						alt={""}
					/>
				</div>
				<p className={"exoplanetarium-paragraphs"}>
					Spacelab is a project with the goal to explore NASA/CallTech
					data from the TESS, Kepler and K2 Missions using various
					degrees of Machine Learning and Deep Natural Networks in the
					pursuit of Earth-Like planets around nearby stars in the
					Milky Way Galaxy.
				</p>
				<br />
				<p className={"exoplanetarium-paragraphs"}>
					Our short-term goal is to find objects on interest for
					professional Astronomers to explore, and to classify
					already-identified candidates that have not yet been
					classified as either exoplanets or false-positives by the
					astronomical community.
				</p>
			</div>
			<div className="exoplanetarium-image">
				<img src={Exoplanetarium} alt="starry sky" />
			</div>
			<div className="button-wrap">
				<a href="https://spacelabdev.github.io/Exoplanetarium-3D/">
					<button>Explore Exoplanetarium</button>
				</a>
			</div>
			<Footer />
		</>
	);
}
