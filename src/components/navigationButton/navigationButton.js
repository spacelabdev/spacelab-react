import React from "react";
import { Link } from "react-router-dom";
import "./navigationButton.scss";

/**
 * Renders a button linking to the path passed in as the pathName prop and with the button text as
 * the text passed in as the buttonText prop
 * @param pathName
 * @param buttonText
 * @returns {JSX.Element}
 * @constructor
 */
export default function NavigationButton({ pathName, buttonText }) {
    return (
        <Link
            className="navigation-button"
            to={pathName}
            style={{ textDecoration: "none" }}
        >
            {buttonText}
        </Link>
    );
}
