import React, { useState, useEffect } from "react";
import "./imageSlider.scss";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function ImageSlider() {
    const [currentImageID, setCurrentImageID] = useState(1);
    const images = [
        {
            id: 1,
            url: "https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,w_771/v1628183232/samples/greg-rakozy-oMpAz-DN-9I-unsplash_fsnc7t.jpg",
            alt: "placeholder",
        },
        {
            id: 2,
            url: "https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,w_817/v1628183234/samples/john-fowler-7Ym9rpYtSdA-unsplash_ebolox.jpg",
            alt: "placeholder 2",
        },
        {
            id: 3,
            url: "https://res.cloudinary.com/djv69vvs7/image/upload/v1628183342/samples/guillermo-ferla-Oze6U2m1oYU-unsplash_mjn1oa.jpg",
            alt: "placeholder 3",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            images.length > currentImageID
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
            {images.map((image) => (
                <img
                    className={currentImageID === image.id ? "show-image" : ""}
                    src={image.url}
                    alt={image.alt}
                    key={image.id}
                />
            ))}

            <div className="slider-dots">
                {images.map((button) => (
                    <button
                        style={
                            currentImageID === button.id
                                ? { background: "white" }
                                : {}
                        }
                        key={button.id}
                        onClick={() => sliderHandler(button.id)}
                    ></button>
                ))}
            </div>
        </div>
    );
}
