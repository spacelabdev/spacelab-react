import React from "react";
import "./ViewMoreButton.scss";
import { Link } from "react-router-dom";

/**
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
