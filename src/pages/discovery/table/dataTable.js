// React imports
import React, {useContext, useEffect, useState} from "react";
import LoadingSpinner from "../../../components/loadingSpinner/loadingSpinner";
import {UniversalContext} from "../../../App";

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
 * @param isSortIconResetNeeded
 * @param setIsSortIconResetNeeded
 * @return {any|JSX.Element}
 * @constructor
 */
export default function DataTable({isSortIconResetNeeded, setIsSortIconResetNeeded, showLoadingSpinner}) {
	const context = useContext(UniversalContext);
	const exoPlanetData = context.exoplanetData;
	const setExoPlanetData = context.setExoplanetData;
	const [unsortedExoPlanetData, setUnsortedExoPlanetData] = useState(null);
	// number of table rows scrolled
	const [rowsScrolled, setRowsScrolled] = useState(0);
	// number of table rows displayed in view
	const [tableHeightInRows,] = useState(50);
	// columnHeaders is an array that will be set with the first render and reflects the order of the column labels
	const [columnHeaders, setColumnHeaders] = useState(null);
	// name of the column which will be sorted
	const [sortColName, setSortColName] = useState(null);
	const [sortOrder, setSortOrder] = useState(null);

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
	];


	/**
	 * Create columnHeaders array and store in state. This is only necessary when columnHeaders is not yet defined which
	 * will be the case after the first render.
	 */
	useEffect(() => {
		if (exoPlanetData && exoPlanetData[0]) {
			// initiate the columnHeaders array as per the keys in the first row object inside the exoPlanetData array
			if (!columnHeaders) {
				setColumnHeaders(Object.keys(exoPlanetData[0]))
			} else {
				// iterate over data response and store column name and array index position in a dict
				const hashTable = {};
				Object.keys(exoPlanetData[0]).forEach((colName, idx) => hashTable[colName] = true);

				// if the user has already used a custom column headers order, filter the columnHeaders array for those
				// columns that are still in the exoPlanetData, and add any new columns to the end
				const newColumnHeaders = columnHeaders.filter(colName => {
					const isColNameInHashTable = hashTable.hasOwnProperty(colName);
					if (isColNameInHashTable) {
						delete hashTable[colName];
					}
					return isColNameInHashTable;
				});

				// iterate over remaining hashKeys and add them to the end of the columnHeaders array
				Object.keys(hashTable).forEach(colName => newColumnHeaders.push(colName));

				// update state
				setColumnHeaders(newColumnHeaders);
			}
		}
		// eslint-disable-next-line
	}, [exoPlanetData]);

	/**
	 * Sort exoPlanetData based on column name and sort order. Sorting needs to happen when 1) user chooses / changes
	 * column, 2) user chooses / changes sort-order, and 3) when the exoPlanetData set is updated.
	 */
	useEffect(() => {
		if (exoPlanetData && exoPlanetData[0]) {
			// save current unsorted state
			if (!unsortedExoPlanetData) {
				setUnsortedExoPlanetData([...exoPlanetData])
			}

			// sort direction depends on sort state
			setExoPlanetData(prevState => {
				const newState = [...prevState];

				// if neutral sort direction, return unsorted data array
				if (!sortOrder) {
					return unsortedExoPlanetData;
				} else {
					return newState.sort((firstRow, secondRow) => {
						// if data type is date, string needs to be parsed first
						const colDataItem = aggregateDataItems.filter(col => col.name === sortColName);

						let firstRowVal = firstRow[sortColName];
						let secondRowVal = secondRow[sortColName];

						if (colDataItem.dataType === "date") {
							firstRowVal = Date.parse(firstRowVal);
							secondRowVal = Date.parse(secondRowVal);
						}

						if (firstRowVal > secondRowVal) {
							return sortOrder === "ascending" ? 1 : -1;
						}
						if (firstRowVal < secondRowVal) {
							return sortOrder === "ascending" ? -1 : 1;
						}
						return 0;
					});
				}
			});
		}
		// eslint-disable-next-line
	}, [sortColName, sortOrder]);

	/**
	 * Implement infinite scrolling. The first render of the table only displays as many rows as specified in the state
	 * variable tableHeightInRows. If the user scrolls to the end of the table, add the tableHeightInRows to the
	 * displayed rows. This incremental scrolling is necessary since the data set can comprise some 10,000 rows, making
	 * the loading of the page very slow.
	 * @param e
	 */
	const handleScrolling = (e) => {
		const tableHeight = e.target.clientHeight;
		const scrollHeight = e.target.scrollHeight;
		const scrollTop = e.target.scrollTop;
		if (scrollTop + tableHeight === scrollHeight) {
			setRowsScrolled(prevState => prevState + tableHeightInRows);
		}
	}

	/**
	 * Return whether a column is associated with left or right alignment. This depends on the data type.
	 * @param dataType
	 * @return {string}
	 */
	const getColumnAlignmentClassFrom = (dataType) => {
		switch (dataType) {
			case "number":
				return "align-right";
			default:
				return "align-left";
		}
	}

	return (
		/* only create table if exoPlanetData exists */
		exoPlanetData && (
			<section id={"data-table"} onScroll={handleScrolling}>
				<LoadingSpinner showLoadingSpinner={showLoadingSpinner}/>
				{/* only create col headers if exoPlanetData has at least one object inside the returned array */}
				{columnHeaders && (
					<TableHeader
						aggregateDataItems={aggregateDataItems}
						columnHeaders={columnHeaders}
						setColumnHeaders={setColumnHeaders}
						exoPlanetData={exoPlanetData}
						getColumnAlignmentFrom={getColumnAlignmentClassFrom}
						sortColName={sortColName}
						setSortColName={setSortColName}
						sortOrder={sortOrder}
						setSortOrder={setSortOrder}
						isSortIconResetNeeded={isSortIconResetNeeded}
						setIsSortIconResetNeeded={setIsSortIconResetNeeded}
					/>
				)}
				{columnHeaders && (
					<TableBody
						exoPlanetData={exoPlanetData}
						tableHeightInRows={tableHeightInRows}
						rowsScrolled={rowsScrolled}
						columnHeaders={columnHeaders}
						getColumnAlignmentFrom={getColumnAlignmentClassFrom}
						aggregateDataItems={aggregateDataItems}
					/>
				)}
			</section>
		)
	);
}
