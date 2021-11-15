import React from "react";
import "./home.scss";
import NavigationButton from "../../components/navigationButton/navigationButton";

/**
 * Renders Support the Cause section
 * @returns {JSX.Element}
 * @constructor
 */
export default function SupportTheCauseSection() {
    return (
        <div id={"support-the-cause-section"}>
            <div id={"support-the-cause-header"}>SUPPORT THE CAUSE</div>
            <p id={"support-the-cause-content"}>
                As diversity fuels creativity and innovation, we here at
                SpaceLab strongly value the voices and perspectives of those
                underrepresented in the community. One of our goals is to create
                paid fellowships, internships, scholarship opportunities, and
                debt relief for those who are underrepresented, including but
                not limited to women, members of the LGBTQ+ community, and
                people of color. Helping members of the community who struggle
                economically will provide them with the liberty and flexibility
                necessary to explore new career paths in science and technology.
                To help us grow these opportunities, please consider making a
                tax-deductible donation to SpaceLab today.
            </p>
            <div id={"contact-us-button-container"}>
                <NavigationButton
                    pathName={"/contact"}
                    buttonText={"CONTACT US"}
                />
            </div>
        </div>
    );
}
