import React from "react";
import "./Chip.scss";

/**
 * Renders Chip components
 * Receives tag prop which includes the tag string
 * @param tag string
 * @returns {JSX.Element}
 * @constructor
 */

export default function Chip({ tag, onClick }) {
	return (
		<div className="chip" id={`chip-${tag}`} onClick={onClick}>
			<p>{tag}</p>
		</div>
	);
}
