import React from "react";
import applePodcast from "../../assets/podcastAssets/apple-podcasts.svg";
import spotify from "../../assets/podcastAssets/spotify.svg";
import youtube from "../../assets/podcastAssets/youtube.svg";
import "./podcast.scss";

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

	const getTagColor = (tag) => {
		console.log("🚀 ~ file: podcastCard.js:18 ~ getTagColor ~ tag", tag);
		if (tag === "Planets") {
			return "#0B7D24";
		} else if (tag === "Space") {
			return "#0B317D";
		} else {
			return "#6610F5";
		}
	};

	const getChips = (tags) => {};

	return (
		<div className="podcast-card">
			<div>
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
				<div style={{ display: "flex" }}>
					{tags.map((tag) => {
						return (
							<div
								className="chip"
								id={`chip-${tag}`}
								style={{
									backgroundColor: `${getTagColor(tag)}`,
								}}
							>
								<p>{tag}</p>
							</div>
						);
					})}
				</div>
				<h4>About:</h4>
				<p className="description">{description}</p>
				<p style={{ marginTop: "1rem" }}>{duration}</p>
				<p>{datePosted}</p>
				<div style={{ display: "flex" }}>
					<a className="stream-button" href={youtubeLink} target="_blank" rel="noreferrer">
						<img src={youtube} />
						<p>Listen on YouTube</p>
					</a>
					<a className="stream-button" href={spotifyLink} target="_blank" rel="noreferrer">
						<img src={spotify} />
						<p>Listen on Spotify</p>
					</a>
				</div>
			</div>
		</div>
	);
}
