import React, { useContext } from "react";
import "./heroImage.scss";
import heroImage from "../../assets/componentAssets/purple-sky-unsplash.jpg";
import Navigation from "../navigation/mainNavMenu/navigation";
import { UniversalContext } from "../../App";
import PropTypes from "prop-types";

/**
 * Renders Hero image at the top of each page based on the prop heroTitle.
 * @returns {JSX.Element}
 * @constructor
 */
const HeroImage = ({ heroTitle }) => {
	// Use heroTitle prop to define heroImage based on the component
	const context = useContext(UniversalContext);
	let pageTitle = context.pageTitle;
	context.setPageTitle(heroTitle);

	// Determine if on home page for purposes of displaying Spacelab image
	if (pageTitle === "" || pageTitle === "HOME") {
		pageTitle = `SPACELAB SUPPORTS DIVERSITY IN TECH`;
	}

	return (
		<>
			<Navigation />
			<div id={"hero-image-container"}>
				<img
					id={"hero-image"}
					src={heroImage}
					alt={"milky way at night"}
				/>
				<h1 id="hero-page">{pageTitle}</h1>
			</div>
		</>
	);
};

HeroImage.propTypes = {
	/**
	 * The test to be displayed in the hero image. Should be the name of the page.
	 */
	heroTitle: PropTypes.string,
};

HeroImage.defaultProps = {
	heroTitle: "SPACELAB",
};

export default HeroImage;
