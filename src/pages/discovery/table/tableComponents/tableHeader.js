import React, { useState } from "react";


/**
 * Returns the column headers, based on the order of the column labels inside the stateful array columnHeaders. The
 * order is subject to change based on the users' drag & drop operations exerted onto the column headers.
 * @param aggregateDataItems
 * @param columnHeaders
 * @return {JSX.Element}
 * @constructor
 */
export default function TableHeader({ aggregateDataItems, columnHeaders, setColumnHeaders }) {
	const [draggedColumnHeaderIdx, setDraggedColumnHeaderIdx] = useState(null)

	const handleDragStart = (e) => {
		// note, the IDs of the column headers represent the index position in the columnHeaders array
		setDraggedColumnHeaderIdx(e.target.id)
	}

	const handleDrop = (e) => {
		const dropZoneColumnHeaderIdx = e.target.id
		const newColumnHeaders = [...columnHeaders]
		newColumnHeaders.splice(dropZoneColumnHeaderIdx, 0, newColumnHeaders.splice(draggedColumnHeaderIdx, 1)[0])
		setColumnHeaders(newColumnHeaders)
	}

	return (
		<>
			<th>#</th>
			{columnHeaders.map((colName, key) => {
				// find colLabel associated with colName
				const colItem = aggregateDataItems.filter(item => item.name === colName)
				const colLabel = colItem[0].label
				return (
					<th
						scope={"col"}
						key={key}
						id={key}
						draggable={true}
						onDragOver={(e) => e.preventDefault()}
						onDragStart={handleDragStart}
						onDrop={handleDrop}
					>
						{colLabel}
					</th>
				)
			})}
		</>
	)
}
