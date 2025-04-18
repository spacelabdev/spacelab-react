import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import ContactForm from "../../components/formComponents/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import './contact.scss'

/**
 * Renders Contact form page with hero image, nav, and footer
 * @returns {JSX.Element}
 * @constructor
 */
export default function Contact() {
	return (
		<div className="contact-page-container">
			<HeroImage heroTitle="CONTACT" />
			<ContactForm />
			<Footer />
		</div>
	);
}
