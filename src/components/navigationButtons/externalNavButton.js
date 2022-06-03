import React from "react";
import "./navButton.scss";

/**
 * Renders a button linking to the url passed in as the href prop and with the button text as
 * the text passed in as the buttonText prop. Used for external navigation to sites outside of Spacelab.
 * @param href
 * @param buttonText
 * @returns {JSX.Element}
 * @constructor
 */
export default function ExternalNavButton({href, buttonText}) {
	return (
		<a
			className="navigation-button"
			href={href}
			target="_blank"
			rel="noreferrer"
			style={{textDecoration: "none"}}
		>
			{buttonText}
		</a>
	);
}
