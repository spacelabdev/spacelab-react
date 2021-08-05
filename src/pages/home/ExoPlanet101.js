import React from "react";
import "./home.scss";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function ExoPlanet101() {
    return (
        <section className="exoplanet-101-section">
            <div className="content-container">
                <div className="left">
                    <h2>ExoPlanet 101</h2>
                    <p>
                        The planets beyond our solar system are called
                        “exoplanets,” and they come in a wide variety of sizes,
                        from gas giants larger than Jupiter to small, rocky
                        planets about as big around as Earth or Mars. They can
                        be hot enough to boil metal or locked in deep freeze.
                        They can orbit their stars so tightly that a “year”
                        lasts only a few days; they can orbit two suns at once.
                        Some exoplanets are sunless rogues, wandering through
                        the galaxy in permanent darkness.
                    </p>
                </div>
                <div className="right"></div>
            </div>
        </section>
    );
}
