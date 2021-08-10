import React from "react";

/**
 * Creates check box for planet system element
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function DiscoveryFilterListItem(props) {
	const filterElements = props.element;

	return (
		<div id={"filter-item"}>
			<input
				type="checkbox"
				id="planet-system"
				name="planet-system"
				value={filterElements[0]}
				// checked={isChecked} onChange{handleOnChange}
			/>
			<span>{filterElements[1]}</span>
		</div>
	);
}
