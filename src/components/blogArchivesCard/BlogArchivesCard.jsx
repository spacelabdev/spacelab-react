import React from "react";
import "./blogArchivesCard.scss";

/**
 * Returns a single blog archives card
 * @param {Object} props - The props object that contains the blog information
 * @returns {JSX.Element}
 * @constructor
 */
export default function BlogArchivesCard(props) {
	let content = props.blog["content:encoded"];
	content = content.toString();
	let imageURL = content.substring(
		content.indexOf("src=") + 5,
		content.indexOf(">", content.indexOf("src=") + 5) - 3
	);

	return (
		<a
			className={"blog-tile"}
			href={props.blog.link}
			target="_blank"
			rel="nofollow noopener noreferrer"
		>
			<img
				className={"blog-tile-image"}
				src={imageURL}
				alt={"blog tile"}
			/>
			<div>
				<p className={"blog-title"}>{props.blog.title}</p>
			</div>
		</a>
	);
}
