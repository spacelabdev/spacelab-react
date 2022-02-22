import React, { useState } from "react";
import dragIcon from "../../../../assets/componentAssets/drag_icon@0.5x.png"
import sortIcon from "../../../../assets/componentAssets/sort_icon@0.5x.png"
import sortDescIcon from "../../../../assets/componentAssets/sort_icon_desc@0.5x.png"
import sortAscIcon from "../../../../assets/componentAssets/sort_icon_asc@0.5x.png"


/**
 * Returns the column headers, based on the order of the column labels inside the stateful array columnHeaders. The
 * order is subject to change based on the users' drag & drop operations exerted onto the column headers.
 * @param aggregateDataItems
 * @param columnHeaders
 * @param setColumnHeaders
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
		const draggedColumnHeader = newColumnHeaders.splice(draggedColumnHeaderIdx, 1)[0]
		newColumnHeaders.splice(dropZoneColumnHeaderIdx, 0, draggedColumnHeader)
		setColumnHeaders(newColumnHeaders)
	}

	return (
		<>
			<th></th>
			{columnHeaders.map((colName, key) => {
				// find colLabel associated with colName
				const colItem = aggregateDataItems.filter(item => item.name === colName)
				const colLabel = colItem[0].label
				return (
					<th
						scope={"col"}
						key={key}
					>
						<img
							id={key}
							src={dragIcon}
							alt={"drag-icon"}
							className={"drag-icon"}
							draggable={true}
							onDragOver={(e) => e.preventDefault()}
							onDragStart={handleDragStart}
							onDrop={handleDrop}
						/>
						{colLabel}
					</th>
				)
			})}
		</>
	)
}
