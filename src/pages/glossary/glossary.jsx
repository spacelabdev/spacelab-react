import React from "react";
import "./glossary.scss";
import HeroImage from "../../components/HeroImage/HeroImage";
import GlossaryList from "./glossaryList";
import Footer from "../../components/Footer/Footer";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Glossary() {
	return (
		<div id={"glossary-wrapper"}>
			<HeroImage heroTitle="GLOSSARY" />
			<GlossaryList />
			<Footer />
		</div>
	);
}
