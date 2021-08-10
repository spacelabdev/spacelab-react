import React from "react";
import {planetTypeFiltersArray} from "../discoveryHelper";
import DiscoveryPlanetTypeListItem from "./discoveryPlanetTypeListItem";

/**
 * Maps over planetTypeFiltersArray and passes elements to DiscoveryPlanetTypeListItem to be parsed and rendered.
 * @returns {JSX.Element} Elements from DiscoveryPlanetTypeListItem
 * @constructor
 */
export default function DiscoveryPlanetTypeList() {
	const filterArray = planetTypeFiltersArray.map((e, index) => {
		return (
			<DiscoveryPlanetTypeListItem element={e} key={index}/>
		)
	});

	return (
		<div id={"filter"}>
			<h2>Planet Type</h2>
			<div className={"planet-type"}>
				{filterArray}
			</div>
		</div>
	);
}
