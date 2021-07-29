import React from "react";
import GlossaryListItem from "./glossaryListItem";
import {glossaryTerms} from "./glossaryhelper";
import './glossary.css';

export default function GlossaryList() {
	// change dictionary of glossary terms to an array to arrays.
	const termsArray = [];
	for (const key in glossaryTerms) {
		if (glossaryTerms.hasOwnProperty(key)) {
			termsArray.push([ key, glossaryTerms[key]]);
		}
	}

	// map over each element in the termsArray and pass them to the GlossaryListItem component as props
	const glossaryTermArray = termsArray.map((e, index) => {
		return (
			<GlossaryListItem element={e} key={index}/>
		);
	});

	return (
		<div className={'glossary-results-wrapper'}>
			<div id={'glossary-title'}>Glossary of Terms</div>
			{glossaryTermArray}
		</div>
	);
};