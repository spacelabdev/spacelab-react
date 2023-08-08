import React from "react";
import Footer from "../../../components/Footer/Footer";
import HeroImage from "../../../components/HeroImage/HeroImage";
import PaypalErrorMessage from "./PaypalErrorMessage";
import "./paypalError.scss";

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function PaypalError() {
    return (
        <>
            <HeroImage heroTitle="DONATE" />
            <PaypalErrorMessage/>
            <Footer />
        </>
    );
}