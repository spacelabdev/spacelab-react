import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import ContactForm from "../../components/contactForm/contactForm";
import Footer from "../../components/footer/footer";

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
