import React from "react";
import Hero from "../components/Hero/hero";
import TitleSection from "../components/titleSection/titleSection";
import AboutOrgIdentitySection from "../components/aboutOrgIdentitySection/aboutOrgIdentitySection";
import CompanyProgressSection from "../components/companyProgressSection/companyProgressSection";
import TestimonialSection from "../components/testimonialSection/testimonialSection";
import Footer from "../../../../components/Footer/Footer";
import "../donate.scss";

/**
 * Renders Donate Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function DonateLandingPage() {
	return (
		<>
			<Hero />
			<div className="section-background">
				<TitleSection />
				<AboutOrgIdentitySection />
				<CompanyProgressSection />
				<TestimonialSection />
			</div>
			<Footer />
		</>
	);
}
