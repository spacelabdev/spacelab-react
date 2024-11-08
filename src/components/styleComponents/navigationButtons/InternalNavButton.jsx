import React from "react";
import PropTypes from "prop-types";

/**
 * Renders a button linking to the path passed in as the pathName prop and with the button text as
 * the text passed in as the buttonText prop. This button is to be used for internal navigation within the Spacelab site.
 * @param pathName {string}
 * @param buttonText {string}
 * @returns {JSX.Element}
 * @constructor
 */
const InternalNavButton = ({ path, buttonText }) => {
	return (
		<button>
			<a href={path}>{buttonText}</a>
		</button>
	);
};

InternalNavButton.propTypes = {
	/**
	 * The internal path that the user should be redirected to
	 */
	path: PropTypes.string,
	/**
	 * The text to be displayed on the button
	 */
	buttonText: PropTypes.string,
};

InternalNavButton.defaultProps = {
	path: null,
	buttonText: "I need buttonText",
};

export default InternalNavButton;
