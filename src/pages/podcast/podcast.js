import React, { useState } from "react";
import HeroImage from "../../components/heroImage/heroImage";
import Footer from "../../components/footer/footer";
import SearchBar from "../../components/dynamicSearchBar/SearchBar";
import { termsArray, podcastArray } from "./podcastHelper";
import "./podcast.scss";
import PodcastCard from "./podcastCard/podcastCard";
import Chip from "../../components/chip/Chip";

/**
 * Renders Podcast page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Podcast() {
	console.log("🚀 ~ file: podcast.js:5 ~ podcastArray", podcastArray);
	const [podcasts, setPodcasts] = useState(podcastArray);

	const displayPodcasts = (searchResult, context) => {
		const podcastList = [];
		podcastArray
			.filter((e) =>
				e.title.toLowerCase().includes(searchResult.title.toLowerCase())
			)
			.map((pod) => {
				return podcastList.push(pod);
			});
		setPodcasts(podcastList);
	};

	return (
		<>
			<HeroImage heroTitle="PODCAST" />
			<div className="page-wrap">
				<div className="page-description">
					<h3>There's so much to learn about Space!</h3>
					<p>New episodes released every Monday!</p>
				</div>
				<div className="search-bar">
					<SearchBar
						placeholder={"Search"}
						data={podcastArray}
						HandleSearchTermClick={displayPodcasts}
					/>
				</div>
				<div className="chip-container">
					{termsArray.map((term, index) => {
						return (
							<Chip
								tag={term}
								key={index}
								onClick={() => displayPodcasts({ title: term })}
							/>
						);
					})}
				</div>
				{podcasts.length > 0 ? (
					podcasts.map((podcast) => {
						return (
							<PodcastCard
								key={`s${podcast.seasonNumber}e${podcast.episodeNumber}`}
								card={podcast}
							/>
						);
					})
				) : (
					<p style={{ fontSize: "1.2rem", padding: "2rem" }}>
						No Podcasts Found
					</p>
				)}
			</div>
			<Footer />
		</>
	);
}
