/**
 * Projects.jsx
 * Webpage featuring TSN's current and past projects.
 */

import React from "react";
import "./projects.scss";
import Navigation from "../../components/navigation/MainNavigation/MainNavigation";
import ExoplanetariumLogo from "../../assets/projectsAssets/exoplanetarium.svg";
import Exoplanetarium from "../../assets/projectsAssets/exoplanetarium.png";
import Donate from "../../assets/projectsAssets/Donate.png";
import Participate from "../../assets/projectsAssets/Participate.png";
import SignUp from "../../assets/projectsAssets/SignUp.png";
import Footer from "../../components/Footer/Footer";

export default function Projects() {
	return (
		<div id="projects">
			<Navigation></Navigation>

			<h1>Projects</h1>
			
			<div className="project-section">
				<img className="exoplanetarium-title" src={ExoplanetariumLogo} alt="Exoplanetarium Logo"></img>
				<div className="exoplanetarium-description">
					<div className="project-description">
						<p>
							A project with the goal to explore NASA/CalTech data from the
							TESS, Kepler, and K2 missions using various degrees of machine 
							learning and deep neural networks in the pursuit of Earth-like
							planets around nearby stars in the Milky Way galaxy.
						</p>
						<p>
							Our short-term goal is to find objects of interest for professional
							astronomers to explore and to classify already-identified candidates
							that have not yet been classified as either exoplanets or 
							false-positives by the astronomical community.
						</p>
					</div>
					<img className="exoplanetarium-preview" src={Exoplanetarium} alt="Screenshot of Exoplanetarium"></img>
				</div>				
				<div className="projects-button">
					<a href="https://spacelabdev.github.io/Exoplanetarium-3D/" rel="noreferrer" target="_blank">
						<button>Explore Exoplanetarium</button>
					</a>
				</div>
			</div>


			<div className={"project-section"}>
				<h2 className="pairs-pods-title">Pairs Pods</h2>
				<div className="project-description">
					<p>
						A project where teams of designers and developers worked 
						together to create a series of unique landing pages for the 
						purpose of researching ways of improving user engagement 
						with The Spacelab Nonprofit website.
					</p>
				</div>
				<div className="pairs-pods-description">
					<img className="pairs-pods-preview" src={Donate} alt="Screenshot of the Donate landing page" />
					<div className="projects-button">
						<a href="/campaigns/donate" rel="noreferrer" target="_blank">
							<button>Explore The Donate Landing Page</button>
						</a>
					</div>
				</div>
				<div className="pairs-pods-description">
					<img className="pairs-pods-preview" src={Participate} alt="Screenshot of the Participate landing page" />
					<div className="projects-button">
						<a href="/campaigns/participate" rel="noreferrer" target="_blank">
							<button>Explore The Participate Landing Page</button>
						</a>
					</div>
				</div>
				<div className="pairs-pods-description">
					<img className="pairs-pods-preview" src={SignUp} alt="Screenshot of the Sign Up landing page" />
					<div className="projects-button">
						<a href="/campaigns/signUp" rel="noreferrer" target="_blank">
							<button>Explore The Sign Up Landing Page</button>
						</a>
					</div>
				</div>
			</div>
			
			<Footer />
		</div>
	);
}
