import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import IntroductionSection from "./IntroductionSection";
import ExoPlanet101Section from "./ExoPlanet101Section";
import "./home.scss";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
    return (
        <>
            <HeroImage />
            <IntroductionSection />
            <ExoPlanet101Section />
        </>
    );
}
