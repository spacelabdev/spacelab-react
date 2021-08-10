import React from "react";

/**
 * Creates check box for planet type element
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function DiscoveryPlanetTypeListItem(props) {
	const filterTypes = props.element;

	return (
		<>
			<input
				type="checkbox"
				id="planet-type"
				name="planet-type"
				value={filterTypes[0]}
			/>
			<p>{filterTypes[1]}</p>
		</>
	);
}
