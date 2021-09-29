import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import Introduction from "./introductionSection";
import ExoPlanet101 from "./exoPlanet101Section";
import FeaturedArticles from "./featuredArticlesSection";
import Explore from "./exploreSection";
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
            <FeaturedArticles />
            <Explore />
            <Footer />
        </>
    );
}
