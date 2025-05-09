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
	dropdownItems: _dropdownItems,
	...dropdownItems
}) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [buttonWidth, setButtonWidth] = useState();
	const dropdownMenuRef = useRef();
	const wrapperRef = useRef();

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

	/**
	 * Close the dropdown when the user clicks outside of it
	 */
	useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		}
		if (isDropdownOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isDropdownOpen]);

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
		dropdownItemClick(e);
		// close menu after selection
		setIsDropdownOpen(false);
	};

	return (
		<div className={"dropdown-button-container"} ref={wrapperRef}>
			<button onClick={handleDropdownToggleClick}>
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
					{Object.values(dropdownItems).map((dropdownItem, index) => {
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
