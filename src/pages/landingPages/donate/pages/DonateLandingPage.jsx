import React from "react";
import Hero from "../components/Hero/Hero";
import TitleSection from "../components/TitleSection/TitleSection";
import AboutOrgIdentitySection from "../components/AboutOrgIdentitySection/AboutOrgIdentitySection";
import CompanyProgressSection from "../components/CompanyProgressSection/CompanyProgressSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
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
