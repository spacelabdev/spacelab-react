import React from "react";
import Navigation from "../../../components/navigation/MainNavigation/MainNavigation";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import WhatWereWorkingOn from "./components/WhatWereWorkingOn/WhatWereWorkingOn";
import Internships from "./components/Internships/Internships";
import Alumni from "./components/Alumni/Alumni";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "../../../components/Footer/Footer";
import "./participate.scss";

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
			<Alumni />
			<CallToAction />
			<Footer />
		</div>
	);
}
