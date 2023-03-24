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

	return (
		<div
			className="chip"
			id={`chip-${tag}`}
		>
			<p>{tag}</p>
		</div>
	);
}
