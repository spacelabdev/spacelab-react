import React from "react";
import Footer from "../../../components/footer/footer";
import AboutOrgIdentitySection from "./aboutOrgIdentitySection/aboutOrgIdentitySection";
import Hero from "./Hero/hero";
import CompanyProgress from "./companyProgress/companyProgress";
import TestimonialSection from "./testimonialSection/testimonialSection";
import "./donate.scss";

/**
 * Renders Donate Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Donate() {
	return (
		<>
			<Hero />
			{/* Code for Donate Landing page goes here */}
			<div className="donate-container">
				<AboutOrgIdentitySection />
				<CompanyProgress />
				<TestimonialSection />
			</div>
			<Footer />
		</>
	);
}
