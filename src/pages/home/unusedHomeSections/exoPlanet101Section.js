import React from "react";
import "../home.scss";
import planet from "../../../assets/planet.svg";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function ExoPlanet101() {
    return (
        <section className="exoplanet-101-section">
            <div className="content-container">
                <div className="left-container">
                    <h2>
                        ExoPlanet <span className="bold line-break">101</span>
                    </h2>
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
                <div className="right-container">
                    <img src={planet} alt="planet" />
                </div>
            </div>
        </section>
    );
}
