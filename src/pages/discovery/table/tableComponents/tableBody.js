import React from "react";


export default function TableBody({ exoPlanetData, tableHeightInRows, rowsScrolled, columnHeaders }) {
	return (
		exoPlanetData.slice(0, tableHeightInRows + rowsScrolled).map((row, rowIndex) => {
			return (
				<div className={"row"} key={rowIndex}>
					<div className={"row-element first-column"}>{1 + rowIndex}</div>
					{columnHeaders.map((colLabel, key) => {
						return <div className={"row-element"} key={key}>{row[colLabel]}</div>
					})}
				</div>
			)
		})
	)
}
