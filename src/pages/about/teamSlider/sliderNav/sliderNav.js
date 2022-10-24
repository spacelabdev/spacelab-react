import React from "react";
import SliderNavLink from "./sliderNavLink";
import PropTypes from "prop-types";
import "./sliderNav.scss";

/**
 * Renders the Nav bar for the sliders
 * @param navObjects
 * @param activeSlide
 * @param setActive
 * @returns {JSX.Element}
 * @constructor
 */
const SliderNav = ({navObjects, activeSlide, setActive}) => {
	return (
		<div className={'menu'}>
			<div className={`slider-nav-button-container`}>
				{navObjects.map((navObject) => (
					<SliderNavLink key={`${navObject.activeFlag}`}
					               navObject={navObject}
					               activeSlide={activeSlide}
					               setActive={setActive}
					/>
				))}
			</div>
		</div>
	);
}

SliderNav.propTypes = {
	navObjects: PropTypes.array,
	activeSlide: PropTypes.string,
	setActive: PropTypes.func,
}

SliderNav.defaultProps = {
	navObjects: null,
	activeSlide: null,
	setActive: null,
}

export default SliderNav;
