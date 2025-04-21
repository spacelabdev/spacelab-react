import React, { useState } from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import { termsArray, podcastArray } from "./podcastHelper";
import "./podcast.scss";
import PodcastCard from "../../components/PodcastCard/PodcastCard";
import Chip from "../../components/styleComponents/Chip/Chip";
import Astronaut from "../../assets/podcastAssets/Astronaut.jpg";

/**
 * Renders Podcast page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Podcast() {
	const [podcasts, setPodcasts] = useState(podcastArray);

	const displayPodcasts = (searchResult, context) => {
		const podcastList = [];
		podcastArray
			.filter((e) =>
				e.title
					.toLowerCase()
					.includes(searchResult?.title.toLowerCase())
			)
			.map((pod) => {
				return podcastList.push(pod);
			});
		setPodcasts(podcastList);
	};

	const clearData = () => {
		setPodcasts(podcastArray);
	};

	return (
		<>
			<HeroImage heroTitle="PODCAST" />
			<div className="page-wrap">
				<div className="page-description">
					<p>There's so much to learn about Space!</p>
					<p>New episodes released every Monday!</p>
				</div>
				<div className="search-bar">
					<SearchBar
						data={podcastArray}
						HandleSearchTermClick={displayPodcasts}
						clearData={clearData}
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
					<div className="dropdown-container"></div>
					<div className="podcast-container">
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
							<div className="fallback-container">
								<p>New Episodes Coming Soon, Stay Tuned!</p>
								<img
									src={Astronaut}
									alt="Astronaut floating in space"
									// style={{
									// 	width: "30%",
									// 	height: "auto",
									// 	margin: "auto",
									// 	paddingBottom: "8rem",
									// }}
								/>

								{/* 
								// Redundant, there's a newsletter subscription form in the footer.
								<div>
									<p> Want To Stay Updated? </p>
									<NewsletterSubscribe/>
								</div>
								*/}
							</div>
						)}
				</div>
			</div>
			<Footer />
		</>
	);
}
