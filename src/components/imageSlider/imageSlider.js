import React, { useState, useEffect } from "react";
import "./imageSlider.scss";
import PropTypes from "prop-types";

/**
 * Creates image slider based on an array of objects, with each entry of the form:
 * {id: (int), url: (string), alt: (string),}
 * @returns {JSX.Element}
 * @constructor
 * @param sliderContent {array}
 */
const ImageSlider = (sliderContent) => {
    const content = sliderContent.sliderContent;
    const [currentImageID, setCurrentImageID] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            content.length > currentImageID
                ? setCurrentImageID((prev) => prev + 1)
                : setCurrentImageID(1);
        }, 5000);
        return () => clearInterval(interval);
    });

    function sliderHandler(id) {
        setCurrentImageID(id);
    }

    return (
        <div className="images">
            {content.map((image) => (
                <img
                    className={currentImageID === image.id ? "show-image" : ""}
                    src={image.url}
                    alt={image.alt}
                    key={image.id}
                />
            ))}

            <div className="slider-dots">
                {content.map((button) => (
                    <button
                        style={currentImageID === button.id ? {background: "white"} : {}}
                        key={button.id}
                        onClick={() => sliderHandler(button.id)}
                    />
                ))}
            </div>
        </div>
    );
};

ImageSlider.propTypes = {
    /**
     * Object with each entry of the form: {id: (int), url: (string), alt: (string),},
     * where the url is the link to the image.
     */
    sliderContent: PropTypes.array,
}

ImageSlider.defaultProps = {
    sliderContent: [],
}

export default ImageSlider;
