import React from "react";

/**
 * Creates check box for planet system element
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function DiscoveryFilterListItem(props) {
	const filterColumn = props.filterColumn;
	const checked = props.checked
	const setChecked = props.setChecked

	const checkbox_style = {
		width: "1.25rem",
		height: "1.25rem"
	}

	function handleCheckboxClick(e) {
		setChecked(prevState => {
			const newState = { ...prevState }
			newState[filterColumn.name] = !prevState[filterColumn.name]
			return newState
		})
	}

	return (
		<div className={"filter-item"}>
			{/*wrapping the input in a div protects the check box from squishing when text wraps*/}
			<div className={'discovery-checkbox-wrapper'}>
				<input
					type="checkbox"
					style={checkbox_style}
					className={'discovery-checkbox'}
					name={filterColumn.name}
					checked={checked[filterColumn.name]}
					onChange={handleCheckboxClick}
				/>
			</div>
			<div className={'search-parameter-name'}>{filterColumn.label}</div>
		</div>
	);
}
