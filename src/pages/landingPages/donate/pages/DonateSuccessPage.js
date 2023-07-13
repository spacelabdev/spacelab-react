import React from "react";
import Hero from "../components/Hero/hero";
import DonatePaymentHeader from "../components/donatePaymentHeader/donatePaymentHeader";
import DonateSuccessMessage from "../components/donateSuccessMessage/donateSuccessMessage";
import Footer from "../../../../components/footer/footer";
import "../donate.scss";

/**
 * Renders Donate Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function DonateSuccessPage() {
	return (
		<>
			<Hero />
			<div className="section-background">
				<DonatePaymentHeader />
				<DonateSuccessMessage />
			</div>
			<Footer />
		</>
	);
}
