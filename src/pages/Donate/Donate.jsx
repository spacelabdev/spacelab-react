import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Donate() {
    return (
        <>
            <HeroImage heroTitle="DONATE" />
            <Link
                to={"/donate/payment"}
                style={{ textDecoration: "none" }}
            >
                <button className="donate-button" component={Link}>
                    Donate
                </button>
            </Link>
            <Footer />
        </>
    );
}