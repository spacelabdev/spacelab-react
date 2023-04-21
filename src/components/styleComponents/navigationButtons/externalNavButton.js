import React from "react";
import PropTypes from "prop-types";

/**
 * Renders a button linking to the url passed in as the href prop and with the button text as
 * the text passed in as the buttonText prop. Used for external navigation to sites outside of Spacelab.
 * @param url {string}
 * @param buttonText {string}
 * @returns {JSX.Element}
 * @constructor
 */
const ExternalNavButton = ({ url, buttonText }) => {
	return (
		<button>
			<a href={url} target="_blank" rel="noreferrer">
				{buttonText}
			</a>
		</button>
	);
};

ExternalNavButton.propTypes = {
	/**
	 * The url where the button will redirect to
	 */
	url: PropTypes.string,
	/**
	 * Text to be displayed on the button
	 */
	buttonText: PropTypes.string,
};

export default ExternalNavButton;
