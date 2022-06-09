import React from "react";
import {Link} from "react-router-dom";
import ScrollToTop from "../scrollToTop/scrollToTop";
import "./navButton.scss";

/**
 * Renders a button linking to the path passed in as the pathName prop and with the button text as
 * the text passed in as the buttonText prop. This button is to be used for internal navigation within the Spacelab site.
 * @param pathName
 * @param buttonText
 * @returns {JSX.Element}
 * @constructor
 */
export default function InternalNavButton({pathName, buttonText}) {
	return (
		<Link
			className="navigation-button"
			to={pathName}
			style={{textDecoration: "none"}}
		>
			<ScrollToTop/>
			{buttonText}
		</Link>
	);
}
