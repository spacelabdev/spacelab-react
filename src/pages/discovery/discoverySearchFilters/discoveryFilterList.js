import React from "react";
import DiscoveryFilterListItem from "./discoveryFilterListItem";
import "../discovery.scss"

/**
 * Maps over filtersArray and passes elements to DiscoveryFilterListItem to be parsed and rendered.
 * @param props filterArray = an array with filter values from discoveryHelper. title = String title for the filter group
 * @returns {JSX.Element}
 * @constructor
 */
export default function DiscoveryFilterList(props) {
	const filterArray = props.filterArray;
	const title = props.title;
	const setChecked = props.setChecked
	const checked = props.checked

	const filtersArray = filterArray.map((filterColumn, index) => {
		return (
			<DiscoveryFilterListItem
				key={index}
				filterColumn={filterColumn}
				setChecked={setChecked}
				checked={checked}
			/>
		)
	});

	return (
		<div className={"filters"}>
			<div className={"title"}>{title}</div>
			<div className={"planet-system"}>
				{filtersArray}
			</div>
		</div>
	);
};
