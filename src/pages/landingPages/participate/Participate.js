import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import Footer from "../../components/footer/footer";
import "./participate.css";

/**
 * Renders Participate Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Participate() {
	return (
		<>
			<HeroImage heroTitle="Participate" />
			<Footer />
		</>
	);
}
