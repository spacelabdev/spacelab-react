import React from "react";
import tempImage from "../../../../src/assets/ju-guan-D-jLxBtEwaA-unsplash.jpg";
//import applePodcast from "../../../assets/podcastAssets/apple-podcasts.svg";
import spotify from "../../../assets/podcastAssets/spotify.svg";
import youtube from "../../../assets/podcastAssets/youtube.svg";
import "./podcastCard.scss";

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
		alt,
		title,
		episodeNumber,
		seasonNumber,
		description,
		datePosted,
		duration,
		youtubeLink,
		spotifyLink,
	} = card;

	return (
		<div className="podcast-card">
			<div className="podcast-image">
				<img
					src={image ? image : tempImage}
					alt={alt}
					style={{
						display: "block",
						objectFit: "cover",
					}}
				/>
			</div>
			<div className="info-box">
				<div className="card-header">
					<h4>{`${title}: (S${seasonNumber}E${episodeNumber})`}</h4>
					<p className="description">{`About: ${description}`}</p>
					<p style={{ margin: "1rem 0" }}>
						{datePosted} · {duration}
					</p>
				</div>
				<div style={{ display: "flex" }}>
					<a
						className="stream-button"
						href={youtubeLink}
						target="_blank"
						rel="noreferrer"
					>
						<img
							style={{
								margin: 0,
								padding: 0,
							}}
							src={youtube}
							alt="youtube logo"
						/>
						<div
							style={{
								margin: 0,
								padding: 0,
								display: "flex",
								flexDirection: "column",
								textAlign: "center",
							}}
						>
							<p
								style={{
									fontSize: ".6rem",
									color: "gray",
								}}
							>
								Listen on
							</p>
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
							<p
								style={{
									fontSize: ".6rem",
									color: "gray",
								}}
							>
								Listen on
							</p>
							<p style={{ fontSize: "1rem" }}>Spotify</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
