import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import Introduction from "./introductionSection";
import ExoPlanet101 from "./exoPlanet101Section";
import SupportTheCauseSection from "./supportTheCauseSection";
import Footer from "../../components/footer/footer";
import "./home.scss";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
    return (
        <>
            <HeroImage />
            <Introduction />
            <ExoPlanet101 />
            <SupportTheCauseSection/>
            <Footer />
        </>
    );
  };