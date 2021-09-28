import React from "react";
import './blog.scss';
import HeroImage from "../../components/heroImage/heroImage";
import Footer from "../../components/footer/footer";
import UnderConstruction from "../../components/underConstructionNotification/underConstruction";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Blog() {
	return (
		<>
			<HeroImage/>
			<UnderConstruction/>
			<Footer/>
		</>
	);
};