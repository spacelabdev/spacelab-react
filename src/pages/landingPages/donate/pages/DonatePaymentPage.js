import React from "react";
import Hero from "../components/Hero/hero";
import Footer from "../../../../components/footer/footer";
import DonatePaymentForm from "../components/donatePaymentForm/donatePaymentForm";
import "../donate.scss";
import DonatePaymentHeader from "../components/donatePaymentHeader/donatePaymentHeader";

/**
 * Renders Donate Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function DonatePaymentPage() {
	return (
		<>
			<Hero />
			<DonatePaymentHeader />
			<DonatePaymentForm />
			<Footer />
		</>
	);
}
