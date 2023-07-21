import React, { useContext } from "react";
import "./Trifold.scss";


/**
 * Returns a trifold of three images
 * @param {Path} image1 image path 1
 * @param {Path} image2 image path 2
 * @param {Path} image3 image path 3
 * @param {String} alt1 alt text for image 1
 * @param {String} alt2 alt text for image 2
 * @param {String} alt3 alt text for image 3
 * @returns {JSX.Element}
 * @constructor
 */


export default function Trifold({image1, alt1, image2, alt2, image3, alt3}) {
    return (
        <div className="images-container">
            <img
                src={image1}
                alt={alt1}
            />
            <img
                src={image2}
                alt={alt2}
            />
            <img
                src={image3}
                alt={alt3}
            />
        </div>
    );
}
