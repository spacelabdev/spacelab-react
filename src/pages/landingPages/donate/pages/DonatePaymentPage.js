import React from "react";
import Hero from "../components/Hero/hero";
import Footer from "../../../../components/footer/footer";
import RadioButtonGroup from "../components/radioButtonGroup/radioButtonGroup";
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
			<RadioButtonGroup />
			<Footer />
		</>
	);
}
