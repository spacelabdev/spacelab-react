import React from "react";
import Navigation from "../../../components/navigation/mainNavMenu/navigation";
import Hero from "./Hero/Hero";
import WhatWereWorkingOn from "./WhatWereWorkingOn/WhatWereWorkingOn";
import Footer from "../../../components/footer/footer";
import "./Participate.scss";

/**
 * Renders Participate Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Participate() {
	return (
		<div className="participate-landing-page">
			<Navigation />
			<Hero />
			<WhatWereWorkingOn />
			<Footer />
		</div>
	);
}
