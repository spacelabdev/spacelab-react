import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import Footer from "../../components/footer/footer";
import {podcastArray} from "./podcastHelper";
import "./podcast.scss";
import UnderConstruction from "../../components/underConstructionNotification/underConstruction";

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Podcast() {
	return (
		<>
			<HeroImage heroTitle="PODCAST" />
			<UnderConstruction />
			<Footer />
		</>
	);
}