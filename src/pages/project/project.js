import React from "react";
import './project.scss';
import HeroImage from "../../components/heroImage/heroImage";
import Footer from "../../components/footer/footer";
import UnderConstruction from "../../components/underConstructionNotification/underConstruction";
import ProjectStatement from "./projectHelper";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Blog() {
	return (
		<>
			<HeroImage/>
            <ProjectStatement/>
			<UnderConstruction/>
			<Footer/>
		</>
	);
};