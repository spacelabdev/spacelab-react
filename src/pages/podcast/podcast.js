import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import Footer from "../../components/footer/footer";
import "./podcast.scss";

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Podcast() {
	return (
		<>
			<HeroImage heroTitle="PODCAST" />
			<Footer />
		</>
	);
}