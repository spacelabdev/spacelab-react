import React, { useEffect, useState } from "react";
import dragIcon from "../../../../assets/componentAssets/drag_icon@0.5x.png"
import rightTriangleUp from "../../../../assets/componentAssets/right-triangle-up.png"
import rightTriangleDown from "../../../../assets/componentAssets/right-triangle-down.png"
import SortIcon from "./sortIcon";


/**
 * Returns the column headers, based on the order of the column labels inside the stateful array columnHeaders. The
 * order is subject to change based on the users' drag & drop operations exerted onto the column headers.
 * @param aggregateDataItems
 * @param columnHeaders
 * @param setColumnHeaders
 * @param exoPlanetData
 * @param getColumnAlignmentFrom
 * @param sortColName
 * @param setSortColName
 * @param sortOrder
 * @param setSortOrder
 * @param isSortIconResetNeeded
 * @param setIsSortIconResetNeeded
 * @return {JSX.Element}
 * @constructor
 */
export default function TableHeader(
	{
		aggregateDataItems,
		columnHeaders,
		setColumnHeaders,
		exoPlanetData,
		getColumnAlignmentFrom,
		sortOrder,
		setSortColName,
		sortColName,
		setSortOrder,
		isSortIconResetNeeded,
		setIsSortIconResetNeeded,
	}) {

	const [draggedColumnHeaderIdx, setDraggedColumnHeaderIdx] = useState(null)

	const handleDragStart = (e) => {
		// note, the IDs of the column headers represent the index position in the columnHeaders array
		const currentTarget = e.currentTarget
		setDraggedColumnHeaderIdx(currentTarget.id)
		const widthOfDraggedElement = currentTarget.offsetWidth
		const heightOfDraggedElement = e.target.offsetHeight
		e.dataTransfer.setDragImage(e.currentTarget, widthOfDraggedElement / 2,  heightOfDraggedElement/ 2)
	}

	const handleDrop = (e) => {
		const dropZoneColumnHeaderIdx = e.currentTarget.id
		const newColumnHeaders = [...columnHeaders]
		const draggedColumnHeader = newColumnHeaders.splice(draggedColumnHeaderIdx, 1)[0]
		newColumnHeaders.splice(dropZoneColumnHeaderIdx, 0, draggedColumnHeader)
		setColumnHeaders(newColumnHeaders)
	}

	return (
		<div id={"column-header-container"}>
			<div className={"column-header first-column"}>
				<p>1</p>
				<img src={rightTriangleUp} alt={"right triangle pointing up"} />
				<img src={rightTriangleDown} alt={"right triangle pointing down"} />
				<p>{exoPlanetData.length.toLocaleString()}</p>
			</div>
			{columnHeaders.map((colName, key) => {
				// find colLabel associated with colName
				const colItem = aggregateDataItems.filter(item => item.name === colName)
				const colLabel = colItem[0].label
				const columnAlignment = getColumnAlignmentFrom(colItem[0].dataType)
				return (
					<div
						className={"column-header"}
						key={key}
						id={key}
						onDragOver={(e) => e.preventDefault()}
						onDrop={handleDrop}
						onDragStart={handleDragStart}
					>
						<img
							src={dragIcon}
							alt={"drag-icon"}
							className={"drag-icon"}
							draggable={true}
						/>
						<div>
							<p className={columnAlignment}>{colLabel}</p>
							<SortIcon
								columnAlignment={columnAlignment}
								sortColName={sortColName}
								setSortColName={setSortColName}
								sortOrder={sortOrder}
								setSortOrder={setSortOrder}
								colName={colName}
								isSortIconResetNeeded={isSortIconResetNeeded}
								setIsSortIconResetNeeded={setIsSortIconResetNeeded}
							/>
						</div>
					</div>
				)
			})}
		</div>
	)
}
