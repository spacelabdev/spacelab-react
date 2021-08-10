import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import Introduction from "./IntroductionSection";
import ExoPlanet101 from "./ExoPlanet101Section";
import FeaturedArticles from "./FeaturedArticlesSection";
import Explore from "./ExploreSection";
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
        </>
    );
}
