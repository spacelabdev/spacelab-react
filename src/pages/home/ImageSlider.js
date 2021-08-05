import React, { useState } from "react";
import "./imageSlider.scss";
import placeHolder from "../../assets/img_placeholder.png";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function ImageSlider() {
    const [currentImageID, setCurrentImageID] = useState(1);
    const images = [
        {
            id: 1,
            url: "https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,w_680/v1607377421/interiordesign/sidekix-media-lrk0l9w8rI0-unsplash_lql3f3.jpg",
            alt: "placeholder",
        },
        {
            id: 2,
            url: placeHolder,
            alt: "nothing is showing",
        },
        {
            id: 3,
            url: "https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,w_680/v1607377421/interiordesign/sidekix-media-lrk0l9w8rI0-unsplash_lql3f3.jpg",
            alt: "nothing is showing",
        },
    ];

    function sliderHandler(id) {
        setCurrentImageID(id);
    }

    // function nextImageHandler() {
    //     setCurrentImageID((prev) => prev + 1);
    // }

    // function prevImageHandler() {
    //     setCurrentImageID((prev) => prev - 1);
    // }

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
                        key={button.id}
                        onClick={() => sliderHandler(button.id)}
                    ></button>
                ))}
            </div>
            {/* <button
                className={
                    currentImageID > 1
                        ? "show prev-button button"
                        : "prev-button button"
                }
                onClick={() => prevImageHandler()}
            >
                prev
            </button> */}
            {/* {currentImageID < images.length && (
                <button
                    className={
                        currentImageID < images.length
                            ? "show next-button button"
                            : "next-button button"
                    }
                    onClick={() => nextImageHandler()}
                >
                    next
                </button>
            )} */}
        </div>
    );
}

// function ImageComponent({ url, alt, id, currentImageID }) {
//     return (
//         <img
//             // className={currentImageID === id ? "show-image" : ""}
//             src={url}
//             alt={alt}
//         />
//     );
// }
