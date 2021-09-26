import React, {useContext} from "react";
import "./heroImage.scss";
import heroImage from "../../assets/componentAssets/felix-mittermeier-Knwea-mLGAg-unsplash.jpg";
import Navigation from "../navigation/navigation";
import {UniversalContext} from "../../App";

/**
 * Renders Hero image at the top of each page and dynamically applies to appropriate page title.
 * @returns {JSX.Element}
 * @constructor
 */
export default function HeroImage() {
	// Get title of page from url and capitalize. Must be set as state to trigger re render for home page.
	const context = useContext(UniversalContext);
	let pageTitle = context.pageTitle;
	const url = window.location.href;
	const urlArray = url.split("/");
	const element = urlArray.length - 1;
	let title = urlArray[element].toUpperCase();
	context.setPageTitle(title);

	// Determine if on home page for purposes of displaying Spacelab image
	if (pageTitle === "" || pageTitle === "home") {
		pageTitle = `SPACE LAB`;
	}

	return (
		<>
			<Navigation/>
			<div id={"hero-image-container"}>
				<img id={"hero-image"} src={heroImage} alt={"milky way at night"}/>
				{/* Logo for home page is an image. Id must be different so that different SCSS styling will apply. */}
				<h1 id={pageTitle === "SPACE LAB" ? "home-page" : "hero-page"}><span>{pageTitle}</span></h1>
			</div>
		</>
	);
}
