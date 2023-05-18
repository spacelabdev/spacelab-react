import React from "react";
import Navigation from "../../../components/navigation/mainNavMenu/navigation";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import WhatWereWorkingOn from "./WhatWereWorkingOn/WhatWereWorkingOn";
import Internships from "./Internships/Internships";
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
			<HowItWorks />
			<WhatWereWorkingOn />
			<Internships />
			<Footer />
		</div>
	);
}
