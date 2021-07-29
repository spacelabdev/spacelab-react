import React from "react";
import GlossaryListItem from "./glossaryListItem";
import {glossaryTermsArray} from "./glossaryhelper";
import './glossary.css';

export default function GlossaryList() {
	// map over each element in the glossaryTermsArray and pass them to the GlossaryListItem component as props
	const glossaryTermArray = glossaryTermsArray.map((e, index) => {
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