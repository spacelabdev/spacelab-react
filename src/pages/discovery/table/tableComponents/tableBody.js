import React from "react";


export default function TableBody({ exoPlanetData, tableHeightInRows, rowsScrolled }) {
	return (
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
	)
}
