// React imports
import React, { useContext, useEffect, useState } from "react";
import { UniversalContext } from "../../../App";

// Component imports
import {
	projectDispositionFiltersArray,
	identificationFiltersArray,
	exoplanetArchiveFiltersArray,
	transitPropertiesFiltersArray,
	thresholdCrossingEventFiltersArray,
	stellarParametersFiltersArray,
	kicParametersFiltersArray,
	pixelBasedKoiVettingFiltersArray,
} from "../discoveryHelper";
import TableHeader from "./tableComponents/tableHeader";
import TableBody from "./tableComponents/tableBody";

// style imports
import "./dataTable.scss"


/**
 * Table component that redraws the table automatically based on the filter options set by the user.
 */
export default function DataTable(props) {
	const context = useContext(UniversalContext);
	// number of table rows scrolled
	const [rowsScrolled, setRowsScrolled] = useState(0)
	// number of table rows displayed in view
	const [tableHeightInRows, ] = useState(30)
	const [columnHeaders, setColumnHeaders] = useState(null)

	// create on array that includes all filter arrays
	const aggregateDataItems = [
		...projectDispositionFiltersArray,
		...identificationFiltersArray,
		...exoplanetArchiveFiltersArray,
		...transitPropertiesFiltersArray,
		...thresholdCrossingEventFiltersArray,
		...stellarParametersFiltersArray,
		...kicParametersFiltersArray,
		...pixelBasedKoiVettingFiltersArray,
	]
	const exoPlanetData = context.exoplanetData

	useEffect(() => {
		if (exoPlanetData[0] && !columnHeaders) {
			// initiate the columnHeaders array as per the keys in the first row object inside the exoPlanetData array
			setColumnHeaders(Object.keys(exoPlanetData[0]))
		}
		// eslint-disable-next-line
	}, [exoPlanetData])

	useEffect(() => {
		console.log(columnHeaders)
	}, [columnHeaders])

	/**
	 * Implement infinite scrolling. The first render of the table only displays as many rows as specified in the state
	 * variable tableHeightInRows. If the user scrolls to the end of the table, add the tableHeightInRows to the
	 * displayed rows. This incremental scrolling is necessary since the data set can comprise some 10,000 rows, making
	 * the loading of the page very slow.
	 * @param e
	 */
	const handleScrolling = (e) => {
		const tableHeight = e.target.clientHeight
		const scrollHeight = e.target.scrollHeight
		const scrollTop = e.target.scrollTop
		if (scrollTop + tableHeight === scrollHeight) {
			setRowsScrolled(prevState => prevState + tableHeightInRows)
		}
	}

	return (
		/* only create table if exoPlanetData exists */
		exoPlanetData && (
			<table id={"data-table"} onScroll={handleScrolling}>
				<thead>
					<tr>
						{/* only create col headers if exoPlanetData has at least one object inside the returned array */}
						{columnHeaders && (
							<TableHeader
								aggregateDataItems={aggregateDataItems}
								columnHeaders={columnHeaders}
							/>
						)}
					</tr>
				</thead>
				<tbody>
					{columnHeaders && (
						<TableBody
							exoPlanetData={exoPlanetData}
							tableHeightInRows={tableHeightInRows}
							rowsScrolled={rowsScrolled}
						/>
					)}
				</tbody>
			</table>
		)
	)
}
