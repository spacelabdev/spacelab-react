import React from "react";
import PropTypes from "prop-types";
import "./loadingSpinner.scss";
import LoadingAnimation from "../../assets/loadingAnimationAssets/loadingAnimation.svg";

/**
 * Renders a centered loading animation when active. To use, initialize with 'loading' prop, and set to true for display,
 * and false for none.
 * @returns {JSX.Element}
 * @constructor
 * @param showLoadingSpinner {Boolean}
 *
 * To use, initialize a state variable in the element, equal to true. Pass that variable into this
 * element as showLoadingSpinner. Once data is finished loading, set that state variable to false to
 * stop showing spinner.
 */
const LoadingSpinner = ({showLoadingSpinner}) => {
	return (
		<img
			src={LoadingAnimation}
			id="loading-spinner"
			className={(showLoadingSpinner) ? "show-spinner" : "hide-spinner"}
			alt="loading..."
			height="120"
			width="120"
		/>
	);
};

LoadingSpinner.propTypes = {
	/**
	 * True or false depending on when loader should be visible. Controlled in parent element.
	 */
	showLoadingSpinner: PropTypes.bool
};

LoadingSpinner.defaultProps = {
	showLoadingSpinner: true
};

export default LoadingSpinner;
