import React, { useContext } from "react";
import "./HeroImage.scss";
import heroImage from "../../assets/componentAssets/purple-sky-unsplash.jpg";
import Navigation from "../navigation/MainNavigation/MainNavigation";
import { UniversalContext } from "../../App";

/**
 * Renders Hero image at the top of each page based on the prop heroTitle.
 * @returns {JSX.Element}
 * @constructor
 */
const HeroImage = ({ heroTitle = "SPACELAB" }) => {
	// Use heroTitle prop to define heroImage based on the component
	const context = useContext(UniversalContext);
	const pageTitle =
		context.pageTitle === "" || context.pageTitle === "HOME"
			? "SPACELAB SUPPORTS DIVERSITY IN TECH"
			: context.pageTitle;
	context.setPageTitle(heroTitle);

	return (
		<>
			<Navigation />
			<div className={"hero-image-container"}>
				<img
					className={"hero-image"}
					src={heroImage}
					alt={"milky way at night"}
				/>
				<h1>{pageTitle}</h1>
			</div>
		</>
	);
};

export default HeroImage;
