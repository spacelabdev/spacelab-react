import React, { useState } from "react";
import SliderNavLink from "./sliderNavLink";
import PropTypes from "prop-types";
import "./sliderNav.scss";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
/**
 * Renders the Nav bar for the sliders
 * @param navObjects
 * @param navFilter
 * @param activeSlide
 * @param setActive
 * @param status
 * @param setStatus
 * @returns {JSX.Element}
 * @constructor
 */
const SliderNav = ({
	navObjects,
	activeSlide,
	setActive,
	status,
	setStatus,
	setShowAll,
	setShowCurrent,
	setShowPast,
}) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleChange = (event) => {
		const updatedStatus = event.target.value;
		setStatus(updatedStatus);
	};
	const MyIcon = (props) => {
		const { style, ...otherProps } = props;
		const colorStyle = {
			color: "white",
		};
		const styles = { ...style, ...colorStyle };
		return <AiOutlineRight {...otherProps} style={styles} />;
	};

	return (
		<div className={"menu"}>
			<div className={`slider-nav-button-container`}>
				<Toolbar>
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
					<FormControl
						id="select-form"
						sx={{
							minWidth: 250,
						}}
					>
						<Select
							sx={{
								color: "white",
								".MuiOutlinedInput-notchedOutline": {
									border: "none",
								},
								"&.Mui-focused .MuiOutlinedInput-notchedOutline":
									{
										border: "none",
									},
								"&:hover .MuiOutlinedInput-notchedOutline": {
									border: "none",
								},
							}}
							id="select-dropdown"
							value={status}
							onChange={handleChange}
							IconComponent={MyIcon}
						>
							<MenuItem
								value={"all"}
								onClick={() => {
									setShowAll(true);
									setShowCurrent(false);
									setShowPast(false);
								}}
							>
								All
							</MenuItem>
							<MenuItem
								value={"current"}
								onClick={() => {
									setShowAll(false);
									setShowCurrent(true);
									setShowPast(false);
								}}
							>
								Current Team Members
							</MenuItem>
							<MenuItem
								value={"past"}
								onClick={() => {
									setShowAll(false);
									setShowCurrent(false);
									setShowPast(true);
								}}
							>
								Past Team Members
							</MenuItem>
						</Select>
					</FormControl>
				</Toolbar>
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
