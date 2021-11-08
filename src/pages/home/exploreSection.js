import React from "react";
import "./home.scss";
import NavigationButton from "../../components/navigationButton/navigationButton";
import placeHolder from "../../assets/generalAssets/img_placeholder.png";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Explore() {
    const exoplanets = [
        { image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629294524/space_images/saturn_yzposd.png", title: "Saturn" },
        { image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629294461/space_images/mars_mqbvm6.png", title: "Mars" },
        { image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629294533/space_images/neptune_exzqod.png", title: "Neptune" },
    ];
    return (
        <section className="explore-section">
            <div className="content-container">
                <h2>Explore</h2>
                <div className="card-display">
                    {exoplanets.map((exoplanet) => (
                        <div className="card" key={exoplanet.title}>
                            <div
                                className="image"
                                style={{
                                    backgroundImage: `url(${placeHolder})`,
                                }}
                            >
                                <img src={exoplanet.image} alt={exoplanet.title} />
                            </div>
                            <p>{exoplanet.title}</p>{" "}
                        </div>
                    ))}
                </div>
                <NavigationButton pathName="/discovery" />
            </div>
        </section>
    );
}
