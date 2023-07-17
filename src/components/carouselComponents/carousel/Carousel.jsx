import React, { useState, useEffect } from "react";
import "./carousel.scss";
import PropTypes from "prop-types";
import rightArrow from "../../assets/right-arrow.svg";
import leftArrow from "../../assets/left-arrow.svg";

/**
 * Creates image slider based on an array of objects, with each entry of the form:
 * {id: (int), url: (string), alt: (string),}
 * @returns {JSX.Element}
 * @constructor
 * @param sliderContent {array} Array of content to be displayed in the carousel. See array format above.
 * @param autoTransition Boolean value determining if the carousel should automatically transition to the next slide
 * @param transitionDelay Int value determining the milliseconds between auto transitions
 * @param showDots Boolean value determining if the nav dots at the bottom of the carousel should be displayed
 * @param showNavButtons Boolean value determining if the nav arrows to the sides of the carousel should be displayed
 */
const Carousel = ({
	sliderContent,
	autoTransition,
	transitionDelay,
	showDots,
	showNavButtons,
}) => {
	const content = sliderContent;
	const [currentImageID, setCurrentImageID] = useState(1);

	// set transition delay to 99 minutes if autoTransition is set to false
	if (!autoTransition) {
		transitionDelay = 5000000;
	}

	useEffect(() => {
		const interval = setInterval(() => {
			content.length > currentImageID
				? setCurrentImageID((prev) => prev + 1)
				: setCurrentImageID(1);
		}, transitionDelay);
		return () => clearInterval(interval);
	});

	function sliderHandler(id) {
		setCurrentImageID(id);
	}

	return (
		<div className="images">
			{content.map((image) => (
				<img
					className={currentImageID === image.id ? "show-image" : ""}
					src={image.url}
					alt={image.alt}
					key={image.id}
				/>
			))}

			<button
				onClick={() =>
					sliderHandler(
						content.length > currentImageID ? currentImageID + 1 : 1
					)
				}
				className={`btn-slide-${showNavButtons} next`}
			>
				<img alt="buttons" src={rightArrow} />
			</button>
			<button
				onClick={() =>
					sliderHandler(
						currentImageID > 1 ? currentImageID - 1 : content.length
					)
				}
				className={`btn-slide-${showNavButtons} prev`}
			>
				<img alt="buttons" src={leftArrow} />
			</button>

			<div className={`slider-dots-${showDots}`}>
				{content.map((button) => (
					<button
						style={
							currentImageID === button.id
								? { background: "white" }
								: {}
						}
						key={button.id}
						onClick={() => sliderHandler(button.id)}
					/>
				))}
			</div>
		</div>
	);
};

Carousel.propTypes = {
	/**
	 * Object with each entry of the form: {id: (int), url: (string), alt: (string),},
	 * where the url is the link to the image.
	 */
	sliderContent: PropTypes.array,
	/**
	 * Boolean value that determines if the carousel should automatically transition to the next slide.
	 * Default value is true.
	 * If set to false, image will still technically transition after 99 minutes,
	 * however for all intents and purposes the user will need to navigate to the next slide manually.
	 */
	autoTransition: PropTypes.bool,
	/**
	 * Integer representing the number of milliseconds of delay between image transitions.
	 * Default set to 5000, which is 5 seconds.
	 */
	transitionDelay: PropTypes.number,
	/**
	 * Boolean value defining if the navigation dots should be present at the bottom of the slider. Default is true.
	 */
	showDots: PropTypes.bool,
	/**
	 * Boolean value defining if the navigation arrows should be present to the left and right of the slider image.
	 * Default is true.
	 */
	showNavButtons: PropTypes.bool,
};

Carousel.defaultProps = {
	sliderContent: [],
	autoTransition: true,
	transitionDelay: 5000,
	showDots: true,
	showNavButtons: true,
};

export default Carousel;
