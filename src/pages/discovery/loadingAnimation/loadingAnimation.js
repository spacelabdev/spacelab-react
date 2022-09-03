import React from "react";
import "./loadingAnimation.scss";
import loadingAnimation from "../../../assets/loadingAnimationAssets/loadingAnimation.svg";

/**
 * Renders a centered loading animation when active. To use, initialize with 'loading' prop, and set to true for display,
 * and false for none.
 * @returns {JSX.Element}
 * @constructor
 */
const LoadingAnimation = (props) => {
    return(
        <img
            src={loadingAnimation}
            id="discovery-loader"
            class={(props.dataLoaded) ? "discovery-not-loading" : "discovery-loading" }
            alt="loading..."
            height="120"
            weight="120"
        />
    )
}

export default LoadingAnimation;