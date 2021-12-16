import React from "react";
import ImageSlider from "../../components/imageSlider/imageSlider";
import {homeSliderImages} from "./homepageHelper";
import "./home.scss";

/**
 * @returns {JSX.Element}
 * @constructor
 */

export default function IntroductionSection() {
    return (
        <section className="introduction-section">
            <h2>Introduction</h2>
            <div className="content-container">
                <ImageSlider images={homeSliderImages}/>
                <div className="about">
                    <h3>What is the Space Lab?</h3>
                    <p>
                        Spacelab is a people-incubator drawing from diverse, underrepresented communities and with a
                        goal of building the leaders of tomorrow through the creation of cross-functional
                        outer-space-focused projects.
                    </p>
                    <p>
                        Our first project uses Machine Learning and Deep Neural Networks to discover and classify
                        exoplanets or planets that orbit stars other than our own sun. We are excited to be able to
                        build on models that NASA Fellows and Scientists first created in prior programs with similar
                        aims.
                    </p>
                </div>
            </div>
        </section>
    );
}
