import React from "react";
import Footer from "../../../components/Footer/Footer";
import HeroImage from "../../../components/HeroImage/HeroImage";
import PaypalSuccessMessage from "./PaypalSuccessMessage";
import "./paypalSuccess.scss";

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function PaypalSuccess() {
    return (
        <>
            <HeroImage heroTitle="DONATE" />
            <PaypalSuccessMessage />
            <Footer />
        </>
    );
}