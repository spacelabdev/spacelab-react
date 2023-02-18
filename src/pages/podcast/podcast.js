import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import Footer from "../../components/footer/footer";
import { podcastArray } from "./podcastHelper";
import "./podcast.scss";
import PodcastCard from "./podcastCard";
import UnderConstruction from "../../components/underConstructionNotification/underConstruction";

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Podcast() {
	console.log("🚀 ~ file: podcast.js:5 ~ podcastArray", podcastArray);
	return (
		<>
			<HeroImage heroTitle="PODCAST" />
			{podcastArray.map((podcast) => {
				return (
					<PodcastCard
						key={`s${podcast.seasonNumber}e${podcast.episodeNumber}`}
						card={podcast}
					/>
				);
			})}

			<Footer />
		</>
	);
}
