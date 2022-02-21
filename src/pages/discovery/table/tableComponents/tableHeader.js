import React from "react";


export default function TableHeader({ aggregateDataItems, columnHeaders }) {
	return (
		<>
			<th>#</th>
			{columnHeaders.map((colName, key) => {
				// find colLabel associated with colName
				const colItem = aggregateDataItems.filter(item => item.name === colName)
				const colLabel = colItem[0].label
				return <th scope={"col"} key={key} draggable={true}>{colLabel}</th>
			})}
		</>
	)
}
