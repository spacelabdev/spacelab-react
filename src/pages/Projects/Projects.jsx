import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import Footer from "../../components/Footer/Footer";
import "./projects.scss";
import ExoplanetariumLogo from "../../assets/projectsAssets/exoplanetarium.svg";
import Exoplanetarium from "../../assets/projectsAssets/Exoplanetarium.png";
import Donate from "../../assets/projectsAssets/Donate.png";
import Participate from "../../assets/projectsAssets/Participate.png";
import SignUp from "../../assets/projectsAssets/SignUp.png";
import Trifold from "../../components/Trifold/Trifold";

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
					Exoplanetarium is a project with the goal to explore
					NASA/CallTech data from the TESS, Kepler and K2 Missions
					using various degrees of Machine Learning and Deep Natural
					Networks in the pursuit of Earth-Like planets around nearby
					stars in the Milky Way Galaxy.
				</p>
				<br />
				<p className={"exoplanetarium-paragraphs"}>
					Our short-term goal is to find objects on interest for
					professional Astronomers to explore, and to classify
					already-identified candidates that have not yet been
					classified as either exoplanets or false-positives by the
					astronomical community.
				</p>

				<div className="image-wrap">
					<img src={Exoplanetarium} alt="starry sky" />
				</div>
				<div className="button-wrap">
					<a href="https://spacelabdev.github.io/Exoplanetarium-3D/">
						<button>Explore Exoplanetarium</button>
					</a>
				</div>
				<h2 className="project-title">PAIRS PODS</h2>
				<p className={"exoplanetarium-paragraphs"}>
					Pairs Pods was a project with the goal of allowing teams of
					designers and developers to work together to create a series
					of unique landing pages for the purpose of researching ways
					of improving user engagement with the Spacelab website.
				</p>
				<div className="image-wrap">
					<a href="/campaigns/donate">
						<img src={Donate} alt="starry sky" />
					</a>
				</div>
				<div className="button-wrap">
					<a href="/campaigns/donate">
						<button>Explore The Donate Landing Page</button>
					</a>
				</div>
				<div className="image-wrap">
					<a href="/campaigns/participate">
						<img src={Participate} alt="starry sky" />
					</a>
				</div>
				<div className="button-wrap">
					<a href="/campaigns/participate">
						<button>Explore The Participate Landing Page</button>
					</a>
				</div>
				<div className="image-wrap">
					<a href="/campaigns/signUp">
						<img src={SignUp} alt="starry sky" />
					</a>
				</div>
				<div className="button-wrap">
					<a href="/campaigns/signUp">
						<button>Explore The Sign Up Landing Page</button>
					</a>
				</div>
			</div>
			<Footer />
		</>
	);
}
