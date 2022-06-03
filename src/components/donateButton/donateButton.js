import React from "react";
import "./donateButton.scss";

/**
 * Renders a button linking to the url passed in as the href prop and with the button text as
 * the text passed in as the buttonText prop
 * @param buttonText
 * @returns {JSX.Element}
 * @constructor
 */
export default function DonateButton({ pathName, buttonText }) {
	return (
		<a
			className="navigation-button"
			href="https://www.paypal.com/donate/?hosted_button_id=PK9D4A3HEWV8C"
            target="_blank"
            rel="noreferrer"
			style={{ textDecoration: "none" }}
		>
			{buttonText}
		</a>
	);
}
