import React from "react";
import "./Chip.scss";

/**
 * Renders Chip components
 * Receives tag prop which includes the tag string
 * @param tag string
 * @returns {JSX.Element}
 * @constructor
 */

export default function chip({ tag }) {
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
}
