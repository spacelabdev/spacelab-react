import React from "react";
import "./podcast.scss";

export default function podcastCard({
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
}) {
	// console.log("🚀 ~ file: podcastCard.js:16 ~ tags", tags);
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

	const getChips = (tags) => {
		
	};

	return (
		<div className="podcast-card">
			<div>
				<img
					src={image}
					alt="cute astronauts"
					style={{
						height: 321,
						width: 321,
						display: "block",
						objectFit: "cover",
					}}
				/>
			</div>
			<div className="info-box">
				<h2 style={{margin: 0, padding: "0rem 0rem .5rem 0rem"}}>{`${title}: (S${seasonNumber}E${episodeNumber})`}</h2>
				<div style={{display: "flex"}}>
					{tags.map((tag) => {
						return (
							<div className="chip" id={`chip-${tag}`} style={{backgroundColor: `${getTagColor(tag)}`}} >
								<p>{tag}</p>
							</div>
						);
					})}
				</div>
				<h4>About:</h4>
				<p>{description}</p>
				<p style={{ marginTop: "1rem" }}>{duration}</p>
				<p>{datePosted}</p>
			</div>
		</div>
	);
}
