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
			{/* <UnderConstruction /> */}
			{podcastArray.map((item) => {
				console.log("image", item.image);
				return (
					<PodcastCard
						key={`ep${item.episodeNumber}`}
						image={item.image}
						title={item.title}
						episodeNumber={item.episodeNumber}
						seasonNumber={item.seasonNumber}
						tags={item.tags}
						description={item.description}
						datePosted={item.datePosted}
						duration={item.duration}
						youtubeLink={item.youtubeLink}
						spotifyLink={item.spotifyLink}
					/>
				);
			})}

			<Footer />
		</>
	);
}
