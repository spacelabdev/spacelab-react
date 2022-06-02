import React from "react";
import './glossary.scss';
import HeroImage from "../../components/heroImage/heroImage";
import GlossaryList from "./glossaryList";
import Footer from "../../components/footer/footer";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Glossary() {
	const displayText = 'Glossary';
	return (
		<div id={'glossary-wrapper'}>
			<HeroImage displayText={displayText}/>
			<GlossaryList/>
			<Footer/>
		</div>
	);
};