import React from "react";


export default function TableBody({ exoPlanetData, tableHeightInRows, rowsScrolled, columnHeaders }) {
	return (
		exoPlanetData.slice(0, tableHeightInRows + rowsScrolled).map((row, rowIndex) => {
			return (
				<tr key={rowIndex}>
					<td>{1 + rowIndex}</td>
					{columnHeaders.map((colLabel, key) => {
						return <td key={key}>{row[colLabel]}</td>
					})}
				</tr>
			)
		})
	)
}
