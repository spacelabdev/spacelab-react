import React from "react";
import applePodcast from "../../assets/podcastAssets/apple-podcasts.svg";
import spotify from "../../assets/podcastAssets/spotify.svg";
import youtube from "../../assets/podcastAssets/youtube.svg";
import "./podcast.scss";
import Chip from "../../components/chip/Chip";

/**
 * Renders Podcast Cards
 * Receives card prop which includes all relevant information of each podcast
 * @param card {object}
 * @returns {JSX.Element}
 * @constructor
 */
export default function podcastCard({ card }) {
	const {
		image,
		title,
		episodeNumber,
		seasonNumber,
		tags,
		description,
		datePosted,
		duration,
		youtubeLink,
		spotifyLink,
	} = card;

	const chips = tags.map((tag) => {
		return <Chip tag={tag} />;
	});

	return (
		<div className="podcast-card">
			<div className="podcast-image">
				<img
					src={image}
					alt="cute astronauts"
					style={{
						height: 350,
						width: 350,
						display: "block",
						objectFit: "cover",
					}}
				/>
			</div>
			<div className="info-box">
				<h2
					style={{ margin: 0, padding: "0rem 0rem .5rem 0rem" }}
				>{`${title}: (S${seasonNumber}E${episodeNumber})`}</h2>
				<div className="chip-container" style={{ display: "flex", marginBottom: ".8rem" }}>{chips ? chips : null}</div>
				<h4>About:</h4>
				<p className="description">{description}</p>
				<p style={{ marginTop: "1rem" }}>{duration}</p>
				<p>{datePosted}</p>
				<div style={{ display: "flex" }}>
					<a
						className="stream-button"
						href={youtubeLink}
						target="_blank"
						rel="noreferrer"
					>
						<img src={youtube} alt="youtube logo" />
						<div
							style={{ display: "flex", flexDirection: "column" }}
						>
							<p style={{ fontSize: ".8rem" }}>Listen on</p>
							<p style={{ fontSize: "1.2rem" }}>YouTube</p>
						</div>
					</a>
					<a
						className="stream-button"
						href={spotifyLink}
						target="_blank"
						rel="noreferrer"
					>
						<img src={spotify} alt="spotify logo" />
						<div className="stream-button-text">
							<p style={{ fontSize: ".8rem" }}>Listen on</p>
							<p style={{ fontSize: "1rem" }}>Spotify</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
