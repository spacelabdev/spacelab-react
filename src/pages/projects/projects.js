import React from "react";
import './projects.scss';
import HeroImage from "../../components/heroImage/heroImage";
import ProjectsIntro from "./projectsIntro";
import UnderConstruction from "../../components/underConstructionNotification/underConstruction";
import Footer from "../../components/footer/footer";

/**
 * @returns {JSX.Element}
 * @constructor
 */

export default function Projects() {
	return (
		<>
			<HeroImage/>
            <ProjectsIntro/>
			<UnderConstruction/>
			<Footer/>
		</>
	);
};