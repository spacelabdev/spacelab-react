import React from "react";
import './about.scss';
import HeroImage from "../../components/heroImage/heroImage";
import MissionStatement  from "./MissionStatementSection";
import Team from "./TeamSection";
import Faq from "./FaqSection";
import ContactForm from "../../components/contactForm/contactForm";
import Footer from "../../components/footer/footer";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function About() {
	return (
		<>
			<HeroImage/>
			<MissionStatement/>
			<Team/>
			<Faq/>
			<ContactForm/>
			<Footer/>
		</>
    );
};