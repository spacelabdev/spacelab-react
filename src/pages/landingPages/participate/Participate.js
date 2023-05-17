import React from "react";
import Navigation from "../../../components/navigation/mainNavMenu/navigation";
import Hero from "./Hero/Hero";

import Footer from "../../../components/footer/footer";
import Internships from "./Internships/Internships";

/**
 * Renders Participate Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Participate() {
	return (
		<>
			<Navigation />
			<Hero />

			<Internships />
			<Footer />
		</>
	);
}
