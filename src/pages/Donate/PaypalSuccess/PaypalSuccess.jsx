import React from "react";
import Footer from "../../../components/Footer/Footer";
import HeroImage from "../../../components/HeroImage/HeroImage";
import PaypalSuccessMessage from "./PaypalSuccessMessage";
import { useLocation } from "react-router-dom";
import "./paypalSuccess.scss";

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function PaypalSuccess() {
    const location = useLocation();
    // const donateType = location.state;
    return (
        <>
            <HeroImage heroTitle="DONATE" />
            <PaypalSuccessMessage donateType={location.state}/>
            <Footer />
        </>
    );
}