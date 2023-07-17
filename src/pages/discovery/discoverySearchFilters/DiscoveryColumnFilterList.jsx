import React from "react";
import DiscoveryColumnFilterListItem from "./DiscoveryColumnFilterListItem";

/**
 * Maps over filtersArray and passes elements to DiscoveryColumnFilterListItem to be parsed and rendered.
 * filtersArray contains all DiscoveryColumnFilterListItems which draw data for the filters from the filterArray source
 * data (see discoveryHelper module)
 * @param props filterArray = an array with filter values from discoveryHelper. title = String title for the filter group
 * @returns {JSX.Element}
 * @constructor
 */
export default function DiscoveryColumnFilterList(props) {
	const {
		filterArray,
		title,
		selectedColumns,
		setSelectedColumns,
		whereFilter,
		setWhereFilter,
	} = props;

	const filtersArray = filterArray.map((filterColumn, index) => {
		return (
			<DiscoveryColumnFilterListItem
				key={index}
				filterColumn={filterColumn}
				setSelectedColumns={setSelectedColumns}
				selectedColumns={selectedColumns}
				whereFilter={whereFilter}
				setWhereFilter={setWhereFilter}
			/>
		);
	});

	return (
		<div className={"filters"}>
			<div className={"title"}>{title}</div>
			<div className={"planet-system"}>{filtersArray}</div>
		</div>
	);
}
