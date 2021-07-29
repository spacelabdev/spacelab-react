import React from "react";
import './glossary.css';
import HeroImage from "../../components/heroImage/heroImage";
import GlossaryList from "./glossaryList";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Glossary() {
	return (
		<>
			<HeroImage/>
			<GlossaryList/>
		</>
	);
};