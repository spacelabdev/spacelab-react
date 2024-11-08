import React from "react";
import Hero from "../components/Hero/Hero";
import Footer from "../../../../components/Footer/Footer";
import DonatePaymentForm from "../components/DonatePaymentForm/DonatePaymentForm";
import DonatePaymentHeader from "../components/DonatePaymentHeader/DonatePaymentHeader";
import "../donate.scss";

/**
 * Renders Donate Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function DonatePaymentPage() {
	return (
		<>
			<Hero />
			<div className="section-background">
				<DonatePaymentHeader />
				<DonatePaymentForm />
			</div>
			<Footer />
		</>
	);
}
