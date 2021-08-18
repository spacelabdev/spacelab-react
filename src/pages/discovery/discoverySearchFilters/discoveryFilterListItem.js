import React from "react";

/**
 * Creates check box for planet system element
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function DiscoveryFilterListItem(props) {
	const filterElements = props.element;
	const checkbox_style = {
		width: "1.5rem",
		height: "1.5rem"
	}

	return (
		<div className={"filter-item"}>
			{/*wrapping the input in a div protects the check box from squishing when text wraps*/}
			<div className={'discovery-checkbox-wrapper'}>
				<input
					type="checkbox"
					style={checkbox_style}
					id="planet-system"
					className={'discovery-checkbox'}
					name="planet-system"
					value={filterElements[0]}
					// checked={isChecked} onChange{handleOnChange}
				/>
			</div>
			<div className={'search-parameter-name'}>{filterElements[1]}</div>
		</div>
	);
}
