import React from "react";
import heroImage from "../../assets/componentAssets/purple-sky-unsplash.jpg";
import Rocket from "../../assets/aboutAssets/ridingRocket.png";
import Planet from "../../assets/aboutAssets/bro.png";
import Explorer from "../../assets/aboutAssets/Top.png";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function AboutMissionStatementSection() {
    return (
        <section id="about-mission-statement-container">
            <div className="inner-section-two">
                <div className="about-mission-segment-container">
                    <div className={"about-values-background"}>
                    <h4 className="about-mission-header">Values</h4>
                    <div className={"about-mission-content"}>
                        <p>
                        We believe everyone's voice counts. 
                        Diverse perspectives lead to better solutions. 
                        We strive for equity, inclusion, and belonging.
                        </p>
                    </div>
                </div>
            </div>
            {/*
            <div className="about-mission-segment-container">
                    <div className={"about-mission-background"}>
                    <h4 className="about-mission-header">Mission</h4>
                    <div className={"about-mission-content"}>
                        <p>
                        SpaceLab is creating opportunities for underrepresented 
                        communities in space and technology. Our focus is building 
                        the next generation of diverse leaders including women, 
                        people of color, and the LGBTQ+ community.
    </p> 
                    </div>
                    </div>
                </div>
                <div className="about-mission-segment-container">
                    <div className={"about-vision-background"}>
                    <h4 className="about-mission-header">Vision</h4>
                    <div className={"about-mission-content"}>
                        <p>
                        We aim to empower underrepresented groups in tech to create 
                        innovative space projects. We strive to cultivate diverse 
                        leaders who will shape the future of the industry and 
                        increase representation in top corporate positions.
                        </p>
                    </div>
                    </div>
                </div> 
                */}
                </div>
        </section>
    );
}
