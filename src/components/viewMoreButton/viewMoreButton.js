import React from "react";
import "./viewMoreButton.scss";
import { Link } from "react-router-dom";

/**
 * Renders a View More button linking to the path passed in as the pathName prop
 * @param pathName
 * @returns {JSX.Element}
 * @constructor
 */
export default function ViewMoreButton({ pathName }) {
    return (
        <Link
            className="view-more"
            to={pathName}
            style={{ textDecoration: "none" }}
        >
            View More
        </Link>
    );
}
