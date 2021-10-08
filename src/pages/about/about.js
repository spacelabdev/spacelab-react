import React from "react";
import './about.scss';
import HeroImage from "../../components/heroImage/heroImage";
import MissionStatement  from "./missionStatementSection";
import Team from "./TeamSection";
import ContactForm from "../../components/contactForm/contactForm";
import History from "./history";
import Footer from "../../components/footer/footer";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function About() {
	return (
		<>
			<HeroImage/>
			<History/>
			<MissionStatement/>
			<Team/>
			<ContactForm/>
			<Footer/>
		</>
    );
};