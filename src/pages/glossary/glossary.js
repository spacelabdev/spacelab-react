import React from "react";
import "./glossary.scss";
import HeroImage from "../../components/heroImage/heroImage";
import GlossaryList from "./glossaryList";
import Footer from "../../components/footer/footer";
import SearchBar from "./SearchBar";
import { glossaryTermsArray } from "./glossaryhelper";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Glossary() {
	return (
		<div id={"glossary-wrapper"}>
			<HeroImage />
			<SearchBar
				placeholder="Enter search term..."
				data={glossaryTermsArray}
			/>
			<GlossaryList />
			<Footer />
		</div>
	);
}
