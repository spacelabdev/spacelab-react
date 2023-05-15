import React from "react";
import HeroImage from "../../../components/heroImage/heroImage";
import Footer from "../../../components/footer/footer";
import "./donate.scss";

/**
 * Renders Donate Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Donate() {
	return (
		<>
			<HeroImage heroTitle="DONATE" />
			<Footer />
		</>
	);
}
