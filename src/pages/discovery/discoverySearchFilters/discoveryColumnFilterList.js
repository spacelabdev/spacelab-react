import React from "react";
import DiscoveryColumnFilterListItem from "./discoveryColumnFilterListItem";
import "../discovery.scss"

/**
 * Maps over filtersArray and passes elements to DiscoveryColumnFilterListItem to be parsed and rendered.
 * @param props filterArray = an array with filter values from discoveryHelper. title = String title for the filter group
 * @returns {JSX.Element}
 * @constructor
 */
export default function DiscoveryColumnFilterList(props) {
	const {
		filterArray,
		title,
		setChecked,
		checked,
		numberFilter,
		setNumberFilter,
	} = props;


	const filtersArray = filterArray.map((filterColumn, index) => {
		return (
			<DiscoveryColumnFilterListItem
				key={index}
				filterColumn={filterColumn}
				setChecked={setChecked}
				checked={checked}
				numberFilter={numberFilter}
				setNumberFilter={setNumberFilter}
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
