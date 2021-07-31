import React, {useContext} from "react";
import GlossaryListItem from "./glossaryListItem";
import {UniversalContext} from "../../App";
import {findFirstThird, findMiddleThird, findLastThird} from "./glossaryhelper";
import './glossary.css';

export default function GlossaryList() {
	const context = useContext(UniversalContext);
	let glossaryArray = [];

	if (context.glossaryTerms !== undefined) {
		glossaryArray = context.glossaryTerms;
	}

	const handleFirstThirdClick = () => {
		context.setGlossaryTerms(findFirstThird);
	};

	const handleMiddleThirdClick = () => {
		context.setGlossaryTerms(findMiddleThird);
	};

	const handledLastThirdClick = () => {
		context.setGlossaryTerms(findLastThird);
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
				<span className={'glossary-filter-button'} onClick={handleFirstThirdClick}>A - I</span>
				<span className={'glossary-filter-button'} onClick={handleMiddleThirdClick}>L - S</span>
				<span className={'glossary-filter-button'} onClick={handledLastThirdClick}>T - Z</span>
			</div>
			<div id={'glossary-term-wrapper'}>
				{glossaryTermArray}
			</div>
			<div id={'glossary-term-name'}>{context.currentGlossaryTerm}</div>
			<div id={'glossary-term-def'}>{context.glossaryTermDef}</div>
		</div>
	);
};