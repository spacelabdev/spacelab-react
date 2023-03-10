import React, { useState } from "react";
import HeroImage from "../../components/heroImage/heroImage";
import Footer from "../../components/footer/footer";
import SearchBar from "../../components/dynamicSearchBar/SearchBar";
import { podcastArray } from "./podcastHelper";
import "./podcast.scss";
import PodcastCard from "./podcastCard";

/**
 * Renders Podcast page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Podcast() {
	console.log("🚀 ~ file: podcast.js:5 ~ podcastArray", podcastArray);
	const [podcasts, setPodcasts] = useState(podcastArray);

	const displayPodcasts = (searchResult, context) => {
		console.log(searchResult);
		const podcastList = [];
		podcastArray
			.filter((e) => e.title === searchResult.title)
			.map((pod) => {
				return podcastList.push(pod);
			});
		console.log("List");
		console.log(podcastList);
		setPodcasts(podcastList);
	};

	return (
		<>
			<HeroImage heroTitle="PODCAST" />
			<SearchBar
				data={podcastArray}
				HandleSearchTermClick={displayPodcasts}
			/>
			{podcasts.map((podcast) => {
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
