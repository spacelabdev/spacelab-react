import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import ContactForm from "../../components/formComponents/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

/**
 * Renders Contact form page with hero image, nav, and footer
 * @returns {JSX.Element}
 * @constructor
 */
export default function Contact() {
	return (
		<>
			<HeroImage heroTitle="CONTACT" />
			<ContactForm />
			<Footer />
		</>
	);
}
