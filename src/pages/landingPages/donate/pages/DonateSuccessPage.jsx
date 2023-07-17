import React from "react";
import Hero from "../components/Hero/Hero";
import DonatePaymentHeader from "../components/DonatePaymentHeader/DonatePaymentHeader";
import DonateSuccessMessage from "../components/DonateSuccessMessage/DonateSuccessMessage";
import Footer from "../../../../components/Footer/Footer";
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
