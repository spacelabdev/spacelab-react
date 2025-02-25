/**
 * Glossary.jsx
 * Glossary page of the website.
 */

import React from "react";
import "./glossary.scss";
import { glossaryTerms } from "./GlossaryTerms";
import Navigation from "../../components/navigation/MainNavigation/MainNavigation";
import SearchBar from "../../components/SearchBar/SearchBar";


export default function Glossary() {
	return (
		
		<div id={"glossary"}>
			<div className="no-scroll">
				<Navigation></Navigation>
				<h1>Glossary</h1>
				<SearchBar></SearchBar>
			</div>
			<div className="scrollable">
				{
					glossaryTerms.map((item, index) => (
						<div key={index} className="glossary-entry" id={item.term}>
							<h3>{item.term}:</h3>
							<p>{item.definition}</p>
						</div>
					))
				}
			</div>
		</div>
	);
}
