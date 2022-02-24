import React, { useEffect, useState } from "react";
import sortNeutralIcon from "../../../../assets/componentAssets/sort_icon@0.5x.png";
import sortDescIcon from "../../../../assets/componentAssets/sort_icon_desc@0.5x.png"
import sortAscIcon from "../../../../assets/componentAssets/sort_icon_asc@0.5x.png"


/**
 * Return sort icon, depending on whether the column is being sorted and the sort direction
 * @param columnAlignment
 * @param sortColName
 * @param setSortColName
 * @param sortOrder
 * @param setSortOrder
 * @param colName
 * @param isSortIconResetNeeded
 * @param setIsSortIconResetNeeded
 * @return {JSX.Element}
 * @constructor
 */
export default function SortIcon(
	{
		columnAlignment,
		sortColName,
		setSortColName,
		sortOrder,
		setSortOrder,
		colName,
		isSortIconResetNeeded,
		setIsSortIconResetNeeded,
	}) {

	// used to dynamically set the sort img to be used for the sort icon, subject to the sorting direction
	const [sortImg, setSortImg] = useState(sortNeutralIcon)

	useEffect(() => {
		if (isSortIconResetNeeded) {
			setSortImg(sortNeutralIcon)
			setIsSortIconResetNeeded(false)
		}
		// eslint-disable-next-line
	}, [isSortIconResetNeeded])

	/**
	 * If the user clicks on the sort icon, it sets the sort direction as well as the column which is being sorted
	 * @param e
	 */
	const handleSortingClick = (e) => {
		// if the current column is same as the sort column, cycle through the sort order options subject to current
		// sort order...
		if (e.target.dataset.colName === sortColName) {
			// eslint-disable-next-line
			switch (sortOrder) {
				case null:
					setSortOrder("descending")
					setSortImg(sortDescIcon)
					break
				case "descending":
					setSortOrder("ascending")
					setSortImg(sortAscIcon)
					break
				case "ascending":
					setSortOrder(null)
					setSortImg(sortNeutralIcon)
					break
			}
		}
		// ...otherwise, start with the descending sort order
		else {
			setSortOrder("descending")
			setSortImg(sortDescIcon)
		}

		// set which column needs sorting
		setSortColName(e.target.dataset.colName)
	}

	return (
		<img
			className={`sort-icon ${columnAlignment}`}
			src={colName === sortColName ? sortImg : sortNeutralIcon}
			alt={"two arrows pointing up and down"}
			onClick={handleSortingClick}
			data-col-name={colName}
		/>
	)
}
