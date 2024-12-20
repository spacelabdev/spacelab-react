import React, { useContext, useEffect } from "react";
import "./heroImage.scss";
// import heroImage from "../../assets/componentAssets/purple-sky-unsplash.jpg";
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
			? "WELCOME TO THE SPACELAB NONPROFIT"
			: context.pageTitle;

	// Call setPageTitle() only AFTER HeroImage/heroTitle changes. Prevents the error from triggering state updates in App component.
	useEffect(() => {
		context.setPageTitle(heroTitle);
	}, [heroTitle, context]);

	return (
		<>
			<Navigation />
			<div className={"hero-image-container"}>
				<h1>{pageTitle}</h1>
			</div>
		</>
	);
};

export default HeroImage;
