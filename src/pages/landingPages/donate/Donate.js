import React from "react";
import Footer from "../../../components/footer/footer";
import AboutOrgIdentitySection from "./aboutOrgIdentitySection/aboutOrgIdentitySection";
import Hero from "./Hero/hero";
import "./donate.scss";
import CompanyProgress from "./companyProgress/companyProgress";

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
			<AboutOrgIdentitySection />
			<CompanyProgress />
			<Footer />
		</>
	);
}
