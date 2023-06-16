import React from "react";
import Hero from "../components/Hero/hero";
import Footer from "../../../../components/footer/footer";
import DonatePaymentForm from "../components/donatePaymentForm/donatePaymentForm";
import DonatePaymentHeader from "../components/donatePaymentHeader/donatePaymentHeader";
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
