import React from "react";
import "./Trifold.scss";




/**
 * Returns a trifold of three images
 * @param {Path} image1 image path 1
 * @param {Path} image2 image path 2
 * @param {Path} image3 image path 3
 * @param {String} alt1 alt text for image 1
 * @param {String} alt2 alt text for image 2
 * @param {String} alt3 alt text for image 3
 * @param {Number} height height for each image in the trifold-- effectively changes the height of the trifold.
 *                        if not specified, height is automatic based on the width attribute
 * @returns {JSX.Element}
 * @constructor
 */




export default function Trifold({height, image1, alt1, image2, alt2, image3, alt3}) {
    return (
        <div className="images-container">
            <img
                height = {height}
                width = "33.3%"
                object-fit = 'cover'
                src={image1}
                alt={alt1}
            />
            <img
                height = {height}
                width = "33.3%"
                object-fit = 'cover'
                src={image2}
                alt={alt2}
            />
            <img
                height = {height}
                width = "33.3%"
                object-fit = 'cover'
                src={image3}
                alt={alt3}
            />
        </div>
    );
}

