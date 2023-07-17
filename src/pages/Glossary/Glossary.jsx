import React from "react";
import "./Glossary.scss";
import HeroImage from "../../components/HeroImage/HeroImage";
import GlossaryList from "./GlossaryList";
import Footer from "../../components/Footer/Footer";

/** Glossary Page
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
