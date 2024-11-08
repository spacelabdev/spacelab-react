import React, { useEffect, useRef, useState } from "react";
import "./dropdownButton.scss";
import rightTriangleDown from "../../../../assets/componentAssets/right-triangle-down.png";
import PropTypes from "prop-types";

/**
 * Returns a dropdown button component
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
const DropdownButton = ({
	buttonLabel,
	dropdownItemClick,
	...dropdownItems
}) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [buttonWidth, setButtonWidth] = useState();
	const dropdownMenuRef = useRef();

	/**
	 * Set the width of the drop down menu
	 */
	useEffect(() => {
		if (isDropdownOpen) {
			// set width of dropdown menu
			dropdownMenuRef.current.style.width = `${buttonWidth}px`;
		}
		// eslint-disable-next-line
	}, [isDropdownOpen]);

	// convert the values of the dictionary into an array whose elements can be mapped over
	const dropdownItemsArray = Object.values(dropdownItems);

	/**
	 * set drop down button width in state and set isDropdownOpen to true or false
	 * @param e
	 */
	const handleDropdownToggleClick = (e) => {
		// get width of drop down button and set state
		const dropdownButtonWidth = e.currentTarget.offsetWidth;
		setButtonWidth(dropdownButtonWidth);

		// open / close drop down
		setIsDropdownOpen((prevState) => {
			return !prevState;
		});
	};

	const handleDropdownItemClick = (e) => {
		e.preventDefault();
		// execute the provided function that governs the effects a click on the dropdown item has
		dropdownItemClick(e);
	};

	return (
		<div className={"dropdown-button-container"}>
			<button
				onClick={handleDropdownToggleClick}
				onBlur={() => setIsDropdownOpen(false)}
			>
				{buttonLabel}
				<img
					src={rightTriangleDown}
					alt={"right triangle pointing down"}
				/>
			</button>
			{isDropdownOpen && (
				<div
					className={"dropdown-items-container"}
					ref={dropdownMenuRef}
				>
					{dropdownItemsArray.map((dropdownItem, index) => {
						return (
							<button
								key={index}
								className={"dropdown-item"}
								rel="noreferrer"
								onClick={handleDropdownItemClick}
							>
								{dropdownItem.label}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
};

DropdownButton.propTypes = {
	/**
	 * The text to show on the dropdown button
	 */
	buttonLabel: PropTypes.string,
	/**
	 * The function to be called when dropdown option is clicked
	 */
	dropdownItemClick: PropTypes.func,
	/**
	 * The object containing the data used to populate the dropdown
	 */
	dropdownItems: PropTypes.object,
};

DropdownButton.defaultProps = {
	buttonLabel: null,
	dropdownItemClick: null,
	dropdownItems: {},
};

export default DropdownButton;
