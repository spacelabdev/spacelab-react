import React from "react";
import HeroImage from "../../../components/heroImage/heroImage";
import Footer from "../../../components/footer/footer";
import "./signUp.scss";

/**
 * Renders Sign Up Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function SignUp() {
	return (
		<>
			<HeroImage heroTitle="SIGN UP" />
			<Footer />
		</>
	);
}
