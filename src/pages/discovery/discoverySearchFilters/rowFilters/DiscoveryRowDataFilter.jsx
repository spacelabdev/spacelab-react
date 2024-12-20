import React from "react";
import DiscoveryRowDataFilterNumberAndDate from "./DiscoveryRowDataFilterNumberAndDate";
import DiscoveryRowDataFilterStringAndEnum from "./DiscoveryRowDataFilterStringAndEnum";

/**
 * Depending on the checked/selected column's data type, this function renders the appropriate filter component
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export default function DiscoveryRowDataFilter(props) {
	const { dataType, dataName, whereFilter, setWhereFilter } = props;

	// render the row data filter
	const getFilterType = () => {
		switch (dataType) {
			case "number":
			case "date":
				return (
					<DiscoveryRowDataFilterNumberAndDate
						dataType={dataType}
						dataName={dataName}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
					/>
				);
			case "string":
			case "enum":
				return (
					<DiscoveryRowDataFilterStringAndEnum
						dataType={dataType}
						dataName={dataName}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
					/>
				);
			default:
		}
	};

	return <>{getFilterType()}</>;
}
