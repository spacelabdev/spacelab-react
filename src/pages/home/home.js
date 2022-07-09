import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import Introduction from "./introductionSection";
import HorizonSection from "./horizonSection";
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
            <HeroImage heroTitle="HOME"/>
            <Introduction/>
            <HorizonSection/>
            <SupportTheCauseSection/>
            <Footer/>
        </>
    );
};
