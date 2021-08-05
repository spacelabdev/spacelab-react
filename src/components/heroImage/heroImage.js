import React, {useContext} from "react";
import "./heroImage.scss";
import heroImage from "../../assets/felix-mittermeier-Knwea-mLGAg-unsplash.jpg";
import NavDesktop from "../navigation/navDesktop";
import {UniversalContext} from "../../App";

/**
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

	if (pageTitle === "") {
		pageTitle = "SPACE LAB";
		let circle = document.getElementById("hero-circle");
		let font_size = document.getElementById("hero-page")
		if (circle !== null) {
			circle.style.display = "none";
			font_size.style.fontSize = "7.5em";
		}
	}

	return (
		<div id={"hero-image-container"}>
			<NavDesktop/>
			<img id={"hero-image"} src={heroImage} alt={"milky way at night"}/>
			<div id={"hero-circle"}/>
			<p id={"hero-page"}>{pageTitle}</p>
		</div>
	);
}
