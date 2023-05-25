import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import ProjectsIntro from "./projectsIntro";
import Footer from "../../components/footer/footer";
import "./projects.scss";
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
			<ProjectsIntro />
			<div className="exoplanetarium-image">
				<img src={Exoplanetarium} alt="starry sky" />
			</div>
			<div className="button-wrap">
				<a href="https://spacelabdev.github.io/Exoplanetarium-3D/">
				<button style={{ textDecoration: 'none !important' }}>Explore Exoplanetarium</button>
				</a>
			</div>
			<Footer />
		</>
	);
}
