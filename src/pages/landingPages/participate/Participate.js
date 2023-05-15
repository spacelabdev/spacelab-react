import React from "react";
import Navigation from "../../../components/navigation/mainNavMenu/navigation";
import Hero from "./Hero/Hero";
import Footer from "../../../components/footer/footer";

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
			<Footer />
		</>
	);
}
