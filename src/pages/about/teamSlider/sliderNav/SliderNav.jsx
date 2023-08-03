import React, { useState } from "react";
import SliderNavLink from "./sliderNavLink";
import PropTypes from "prop-types";
import "./sliderNav.scss";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";

/**
 * Renders the Nav bar for the sliders
 * @param navObjects
 * @param activeSlide
 * @param setActive
 * @returns {JSX.Element}
 * @constructor
 */
const SliderNav = ({ navObjects, activeSlide, setActive }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<div className={"menu"}>
			<div className={`slider-nav-button-container`}>
				<h4>Filter</h4>

				<Button
					id="dropdown-basic"
					aria-controls={open ? "basic-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					onClick={handleClick}
				>
					{open ? <AiOutlineDown /> : <AiOutlineRight />}
				</Button>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					MenuListProps={{
						"aria-labelledby": "basic-button",
					}}
				>
					{navObjects.map((navObject) => (
						<SliderNavLink
							key={`${navObject.activeFlag}`}
							navObject={navObject}
							activeSlide={activeSlide}
							setActive={setActive}
							setAnchorEl={setAnchorEl}
							className="dropdown-item"
						/>
					))}
				</Menu>
			</div>
		</div>
	);
};

SliderNav.propTypes = {
	/**
	 * Array of nav objects which include the title to be displayed as the nav link,
	 * and the flag that is check to see if the nav link should be underlined as active.
	 */
	navObjects: PropTypes.array,
	/**
	 * State which is set to the current active slide
	 */
	activeSlide: PropTypes.string,
	/**
	 * Function to update the activeSlide state variable to a new activeSlide
	 */
	setActive: PropTypes.func,
};

SliderNav.defaultProps = {
	navObjects: null,
	activeSlide: null,
	setActive: null,
};

export default SliderNav;
