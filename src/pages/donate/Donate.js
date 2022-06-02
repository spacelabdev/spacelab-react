import React from "react";
import "./donate.scss";
import DonateDetails from "./DonateDetails"
import HeroImage from "../../components/heroImage/heroImage";
import Footer from "../../components/footer/footer";

/**
 * Renders Donate Page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Donate() {
	return (
		<>
			<HeroImage />
            {/* <DonateDetails /> */}
            <button className="donate-button">Donate</button>
			<Footer />
		</>
	);
}
