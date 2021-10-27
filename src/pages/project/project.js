// TODO: This file should be called projects.js, plural. The directory should be renamed 'projects' as well

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
// Todo: Function should be called Projects to match the file name. Looks like this was maybe copied from the blog file?
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