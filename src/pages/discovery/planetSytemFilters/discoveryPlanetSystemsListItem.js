import React from "react";

/**
 * Creates check box for planet system element
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function DiscoveryPlanetSystemsListItem(props) {
	const filterElements = props.element;

	return (
		<div>
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
