import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import Footer from "../../components/Footer/Footer";
import DonatePaymentForm from "./DonatePaymentForm/DonatePaymentForm";

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Donate() {
    return (
        <>
            <HeroImage heroTitle="DONATE" />
            <DonatePaymentForm />
            <Footer />
        </>
    );
}