import React from "react";
import PropTypes from "prop-types";
import "./sliderNav.scss";

/**
 * Creates each slider nav link JSX. Rendered by SliderNav
 * @param navObject
 * @param activeSlide
 * @param setActive
 * @returns {JSX.Element}
 * @constructor
 */
const SliderNavLink = ({navObject, activeSlide, setActive}) => {
	return (
		<div className={`${activeSlide === navObject.activeFlag ? 'active' : ''}`}
		     onClick={() => setActive(navObject.activeFlag)}
		>
			{navObject.title}
		</div>
	);
}

SliderNavLink.propTypes = {
	/**
	 * Objects containing the title to be displayed as the nav link,
	 * and the flag that is check to see if the nav link should be underlined as active.
	 */
	navObject: PropTypes.object,
	/**
	 * State which is set to the current active slide
	 */
	activeSlide: PropTypes.string,
	/**
	 * Function to update the activeSlide state variable to a new activeSlide
	 */
	setActive: PropTypes.func,
}

SliderNavLink.defaultProps = {
	navObjects: null,
	activeSlide: null,
	setActive: null,
}

export default SliderNavLink;
