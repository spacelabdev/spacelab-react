// React imports
import React, { useContext, useState } from "react";
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
	const [tableHeightInRows, setTableHeightInRows] = useState(30)

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
						{exoPlanetData[0] && (
							<>
								<th>#</th>
								{Object.keys(exoPlanetData[0]).map((colName, key) => {
									// find colLabel associated with colName
									const colItem = aggregateDataItems.filter(item => item.name === colName)
									const colLabel = colItem[0].label
									return <th scope={"col"} key={key}>{colLabel}</th>
								})}
							</>
						)}
					</tr>
				</thead>
				<tbody>
					{exoPlanetData[0] && (
						exoPlanetData.slice(0, tableHeightInRows + rowsScrolled).map((row, rowIndex) => {
							return (
								<tr key={rowIndex}>
									<td>{1 + rowIndex}</td>
									{Object.values(row).map((colData, key) => {
										return <td key={key}>{colData}</td>
									})}
								</tr>
							)
						})
					)}
				</tbody>
			</table>
		)
	)
}
