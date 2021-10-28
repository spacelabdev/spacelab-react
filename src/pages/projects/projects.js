
import React from "react";
import './projects.scss';
import HeroImage from "../../components/heroImage/heroImage";
import Footer from "../../components/footer/footer";
import UnderConstruction from "../../components/underConstructionNotification/underConstruction";
import ProjectsIntro from "./projectsIntro";

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