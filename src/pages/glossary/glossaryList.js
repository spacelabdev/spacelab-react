import React, {useContext} from "react";
import GlossaryListItem from "./glossaryListItem";
import {UniversalContext} from "../../App";
import {findFirstHalf} from "./glossaryhelper";
import {findSecondHalf} from "./glossaryhelper";
import './glossary.css';

export default function GlossaryList() {
	const context = useContext(UniversalContext);
	let glossaryArray = [];

	if (context.glossaryTerms !== undefined) {
		glossaryArray = context.glossaryTerms;
	}

	const handleFirstHalfClick = () => {
		context.setGlossaryTerms(findFirstHalf);
	};

	const handledSecondHalfClick = () => {
		context.setGlossaryTerms(findSecondHalf);
	}

	// map over each element in the glossaryTermsArray and pass them to the GlossaryListItem component as props
	const glossaryTermArray = glossaryArray.map((e, index) => {
		return (
			<GlossaryListItem element={e} key={index}/>
		);
	});

	return (
		<div className={'glossary-results-wrapper'}>
			<div id={'glossary-button-container'}>
				<span className={'glossary-filter-button'} onClick={handleFirstHalfClick}>A - O</span>
				<span className={'glossary-filter-button'} onClick={handledSecondHalfClick}>P - Z</span>
			</div>
			{glossaryTermArray}
		</div>
	);
};