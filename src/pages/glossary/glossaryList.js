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

	const highlightCurrentFilter = (currentSelection) => {
		const alphabetFilters = document.querySelectorAll(".glossary-filter-button");
		alphabetFilters.forEach(alphabetFilter => {
			alphabetFilter.id === currentSelection
				? alphabetFilter.setAttribute('style', 'color: #7000FF; border-bottom: 2px solid #7000FF;')
				: alphabetFilter.setAttribute('style', 'color: white; border-bottom: 2px solid white;');
		});
	}

	const handleFirstThirdClick = () => {
		const currentSelection = 'glossary-filter-button-A-J';
		context.setGlossaryTerms(findFirstThird);
		highlightCurrentFilter(currentSelection);
	};

	const handleMiddleThirdClick = () => {
		const currentSelection = 'glossary-filter-button-K-S';
		context.setGlossaryTerms(findMiddleThird);
		highlightCurrentFilter(currentSelection);
	};

	const handledLastThirdClick = () => {
		const currentSelection = 'glossary-filter-button-T-Z';
		context.setGlossaryTerms(findLastThird);
		highlightCurrentFilter(currentSelection);
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
				<span
					className={'glossary-filter-button'}
					id={'glossary-filter-button-A-J'}
					onClick={handleFirstThirdClick}>
					A - J
				</span>
				<span
					className={'glossary-filter-button'}
					id={'glossary-filter-button-K-S'}
					onClick={handleMiddleThirdClick}>
					K - S
				</span>
				<span
					className={'glossary-filter-button'}
					id={'glossary-filter-button-T-Z'}
					onClick={handledLastThirdClick}>
					T - Z
				</span>
			</div>
			<div id={'glossary-term-wrapper'}>{glossaryTermArray}</div>
			<div id={'glossary-term-name'}>{context.currentGlossaryTerm}</div>
			<div id={'glossary-term-def'}>{context.glossaryTermDef}</div>
		</div>
	);
};