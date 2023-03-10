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
			<div className="page-wrap">
				<div className="page-description">
					<p>
						<span className="bold-text">About:</span> ipsum dolor
						sit amet, consectetur adipiscing elit. Urna, imperdiet
						adipiscing libero commodo egestas ac pretium, at.
						Viverra viverra quam non aliquet. Nec volutpat in morbi
						molestie sem porttitor massa. Massa ac viverra montes,
						maecenas tempus, lorem ultrices.{" "}
					</p>
				</div>
				<div className="search-bar">
					<SearchBar
						data={podcastArray}
						HandleSearchTermClick={displayPodcasts}
					/>
				</div>
				{podcasts.map((podcast) => {
					return (
						<PodcastCard
							key={`s${podcast.seasonNumber}e${podcast.episodeNumber}`}
							card={podcast}
						/>
					);
				})}
			</div>
			<Footer />
		</>
	);
}
