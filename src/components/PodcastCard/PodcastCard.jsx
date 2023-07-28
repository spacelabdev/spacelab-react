import React from "react";
import tempImage from "../../../src/assets/ju-guan-D-jLxBtEwaA-unsplash.jpg";
//import applePodcast from "../../../assets/podcastAssets/apple-podcasts.svg";
import spotify from "../../assets/podcastAssets/spotify.svg";
import youtube from "../../assets/podcastAssets/youtube.svg";
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
				<img src={image ? image : tempImage} alt={alt} />
			</div>
			<div className="info-box">
				<div className="card-header">
					<h4>{`${title}: (S${seasonNumber}E${episodeNumber})`}</h4>
					<p className="description">{`About: ${description}`}</p>
					<p style={{ margin: "1rem 0" }}>
						{datePosted} · {duration}
					</p>
				</div>
				<div className="card-footer">
					<div className="button-wrap">
						<p className="listen">Listen on</p>
						<a
							className="stream-button"
							href={youtubeLink}
							target="_blank"
							rel="noreferrer"
						>
							<img src={youtube} alt="youtube logo" />
							<p>YouTube</p>
						</a>
					</div>

					<div className="button-wrap">
						<p className="listen">Listen on</p>
						<a
							className="stream-button"
							href={spotifyLink}
							target="_blank"
							rel="noreferrer"
						>
							<img src={spotify} alt="spotify logo" />
							<p>Spotify</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
