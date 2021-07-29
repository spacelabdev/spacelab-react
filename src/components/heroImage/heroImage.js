import React from "react";
import "./heroImage.css";
import heroImage from "../../assets/felix-mittermeier-Knwea-mLGAg-unsplash.jpg"

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function HeroImage() {
	// Get title of page from url and capitalize
	const url = window.location.href;
	const urlArray = url.split('/');
	const element = urlArray.length - 1;
	let pageTitle = urlArray[element].toUpperCase();

	if (pageTitle === '') {
		pageTitle = "SPACELAB";
	}

	return (
		<div id={'hero-image-container'}>
			<img id={'hero-image'} src={heroImage} alt={'milky way at night'}/>
			<div id={'hero-circle'}>
			</div>
			<p id={'hero-page'} >{pageTitle}</p>
		</div>
	);
};