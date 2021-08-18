import React from "react";
import "./home.scss";
import ViewMoreButton from "../../components/viewMoreButton/ViewMoreButton";
import placeHolder from "../../assets/img_placeholder.png";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Explore() {
    const exoplanets = [
        { image: placeHolder, title: "Exoplanet" },
        { image: placeHolder, title: "Exoplanet" },
        { image: placeHolder, title: "Exoplanet" },
    ];
    return (
        <section className="explore-section">
            <div className="content-container">
                <h2>Explore</h2>
                <div className="card-display">
                    {exoplanets.map((exoplanet) => (
                        <div className="card">
                            <div
                                className="image"
                                style={{
                                    backgroundImage: `url(${exoplanet.image})`,
                                }}
                            ></div>
                            <p>{exoplanet.title}</p>{" "}
                        </div>
                    ))}
                </div>
                <ViewMoreButton pathName="/discovery" />
            </div>
        </section>
    );
}
