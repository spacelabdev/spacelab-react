import React from "react";


export default function TableBody(
	{
		exoPlanetData,
		tableHeightInRows,
		rowsScrolled,
		columnHeaders,
		getColumnAlignmentFrom,
		aggregateDataItems
	}) {

	/**
	 * Returns a formatted string representation of the data
	 * @param rawData
	 * @param dataType
	 */
	const getFormattedData = (rawData, dataType) => {
		// eslint-disable-next-line
		switch (dataType) {
			case "enum":
			case "string":
				return convertToPascalCase(rawData)
			case "date":
				const parsedDate = new Date(Date.parse(rawData))
				return parsedDate.toLocaleDateString()
			case "number":
				return rawData
		}
	}

	/**
	 * Capitalize all first characters of each word
	 * @param rawData
	 * @return {*}
	 */
	const convertToPascalCase = (rawData) => {
		if (rawData && typeof rawData !== "number") {
			return rawData.split(" ").map(word => {
				return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
			}).join(" ")
		}
		else {
			return rawData
		}
	}

	return (
		exoPlanetData.slice(0, tableHeightInRows + rowsScrolled).map((row, rowIndex) => {
			return (
				<div className={"row"} key={rowIndex}>
					<div className={"row-element first-column"}>{1 + rowIndex}</div>
					{columnHeaders.map((colLabel, key) => {
						const colItem = aggregateDataItems.filter(item => item.name === colLabel)
						const dataType = colItem[0].dataType
						const columnAlignment = getColumnAlignmentFrom(dataType)
						const formattedData = getFormattedData(row[colLabel], dataType)
						return <div className={`row-element ${columnAlignment}`} key={key}>{formattedData}</div>
					})}
				</div>
			)
		})
	)
}
