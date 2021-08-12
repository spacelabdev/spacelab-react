import React from "react";
import './glossary.css';
import HeroImage from "../../components/heroImage/heroImage";
import GlossaryList from "./glossaryList";
import Footer from "../../components/footer/footer";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Glossary() {
	return (
		<>
			<HeroImage/>
			<GlossaryList/>
			<Footer/>
		</>
	);
};