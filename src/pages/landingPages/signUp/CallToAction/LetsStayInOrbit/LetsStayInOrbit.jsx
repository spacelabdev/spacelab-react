import React from 'react';
import { Experiment, Variant } from '@marvelapp/react-ab-test';

export default function LetsStayInOrbit() {
    return (
        <>
            <span className="cta-heading">Let's Stay In Orbit!</span>
            <br />
            <Experiment name="LetsStayInOrbitTest">
                <Variant name="Orbit.v1">
                    <span className="cta-subheading">
                        Join our community of space enthusiasts by signing up for our newsletter! You'll be among the first to hear about the progress of our latest project, Exoplanetarium, which locates all known exoplanets. You'll get exclusive access to all the latest news and information about Exoplanetarium straight to your inbox.
                    </span>
                </Variant>
                <Variant name="Orbit.v2">
                    <span className="cta-subheading">
                        Subscribe now and join our community of space enthusiasts!
                    </span>
                </Variant>
            </Experiment>
        </>
     )
}