// import React from "react";
// import SliderNavLink from "./sliderNavLink";
// import PropTypes from "prop-types";
// import "./sliderNav.scss";

// /**
//  * Renders the Nav bar for the sliders
//  * @param navObjects
//  * @param activeSlide
//  * @param setActive
//  * @returns {JSX.Element}
//  * @constructor
//  */
// const SliderNav = ({navObjects, activeSlide, setActive}) => {
// 	return (
// 		<div className={'menu'}>
// 			<div className={`slider-nav-button-container`}>
// 				{navObjects.map((navObject) => (
// 					<SliderNavLink key={`${navObject.activeFlag}`}
// 					               navObject={navObject}
// 					               activeSlide={activeSlide}
// 					               setActive={setActive}
// 					/>
// 				))}
// 			</div>
// 		</div>
// 	);
// }

// SliderNav.propTypes = {
// 	/**
// 	 * Array of nav objects which include the title to be displayed as the nav link,
// 	 * and the flag that is check to see if the nav link should be underlined as active.
// 	 */
// 	navObjects: PropTypes.array,
// 	/**
// 	 * State which is set to the current active slide
// 	 */
// 	activeSlide: PropTypes.string,
// 	/**
// 	 * Function to update the activeSlide state variable to a new activeSlide
// 	 */
// 	setActive: PropTypes.func,
// }

// SliderNav.defaultProps = {
// 	navObjects: null,
// 	activeSlide: null,
// 	setActive: null,
// }

// export default SliderNav;
