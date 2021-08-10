import React from "react";
import {planetSystemsFiltersArray} from "../discoveryHelper";
import DiscoveryPlanetSystemsListItem from "./discoveryPlanetSystemsListItem";

/**
 * Maps over planetSystemsFiltersArray and passes elements to DiscoveryPlanetSystemsListItem to be parsed and rendered.
 * @returns {JSX.Element} Elements from DiscoveryPlanetSystemsListItem
 * @constructor
 */
export default function DiscoveryPlanetSystemsList() {
	const filtersArray = planetSystemsFiltersArray.map((e, index) => {
		return (
			<DiscoveryPlanetSystemsListItem element={e} key={index}/>
		)
	});

	return (
		<div id={"filters"}>
			<h2>Planet Systems</h2>
			<div className={"planet-system"}>
				{filtersArray}
			</div>
		</div>
	);
};