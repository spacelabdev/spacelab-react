import React from "react";
import applePodcast from "../../assets/podcastAssets/apple-podcasts.svg";
import spotify from "../../assets/podcastAssets/spotify.svg";
import youtube from "../../assets/podcastAssets/youtube.svg";
import "./podcast.scss";

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

	const chipColors = {
		orange: "#F05223",
		gold: "#F3AA1E",
		green: "#349F65",
		purple: "#5041AA",
		lightPurple: "#8923FF",
		pink: "#F37D7E",
	};

	const getTagColor = (tag) => {
		const { orange, gold, green, purple, lightPurple, pink } = chipColors;
		let color;
		switch (tag.toLowerCase()) {
			case "planets": {
				color = orange;
				break;
			}
			case "space": {
				color = gold;
				break;
			}
			case "stars": {
				color = green;
				break;
			}
			case "asteroids": {
				color = pink;
				break;
			}
			case "astronaut": {
				color = purple;
				break;
			}
			default: {
				color = lightPurple;
			}
		}
		return color;
	};

	// const getChips = (tags) => {};

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
