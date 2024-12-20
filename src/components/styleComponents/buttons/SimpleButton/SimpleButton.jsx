import React, { useEffect, useState } from "react";
import "./simpleButton.scss";
import { useHistory } from "react-router";
import PropTypes from "prop-types";

/**
 * Returns a button component which either accepts a callback function (buttonEffectAsync) or a url string
 * (urlRedirect). Upon pressing the button either the callback is invoked or the user is redirected to the provided URL.
 * Provide either urlRedirect or buttonEffectAsync function, but not both.
 * @param buttonName {string} button name displayed
 * @param urlRedirect {string} click event redirects user to this url
 * @param buttonEffectAsync {function} function that is executed if button is clicked and returns a promise
 * @return {JSX.Element}
 * @constructor
 */
const SimpleButton = ({ buttonName, urlRedirect, buttonEffectAsync }) => {
	// create history object from useHistory hook
	const history = useHistory();

	// state variable that indicates whether the button's synchronous function is loading or not
	const [isLoading, setIsLoading] = useState(false);

	// invoke the button effect if isLoading variable changes state from false to true
	useEffect(() => {
		if (isLoading) {
			// execute if button is supposed to redirect
			if (urlRedirect) {
				// push url onto history object
				history.push(urlRedirect);
			}

			// execute if button is supposed to do something other than redirect
			if (buttonEffectAsync) {
				// TODO: This does not fail gracefully when used in the discover filters, and no filters are checked
				buttonEffectAsync()
					.then((res) => {
						console.log(res);
					})
					.catch((e) => {
						console.error(e);
					})
					.finally(() => {
						setIsLoading(false);
					});
			}
		}
		// This side effect needs to run only if the isLoading var changes. In particular, adding buttonEffectAsync
		// causes the buttonEffectAsync callback to be executed twice and with it two API calls to the CalTech endpoint.
		// eslint-disable-next-line
	}, [isLoading]);

	// set isLoading state to true if button is clicked
	const handleButtonClick = () => {
		setIsLoading(true);
	};

	return (
		<button
			disabled={isLoading}
			onClick={handleButtonClick}
			className={"standard-button"}
		>
			{isLoading ? "Loading..." : buttonName}
		</button>
	);
};

SimpleButton.propTypes = {
	/**
	 * the text to show on the button
	 */
	buttonName: PropTypes.string,
	/**
	 * URL to redirect the user to if applicable
	 */
	urlRedirect: PropTypes.string,
	/**
	 * Async function to call on click if applicable
	 */
	buttonEffectAsync: PropTypes.func,
};

SimpleButton.defaultProps = {
	buttonName: null,
	urlRedirect: null,
	buttonEffectAsync: null,
};

export default SimpleButton;
