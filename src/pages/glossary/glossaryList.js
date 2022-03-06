import React, {useContext} from "react";
import GlossaryListItem from "./glossaryListItem";
import {UniversalContext} from "../../App";
import {returnFilteredTerms, handleTermImage, handleMissingTermImage, highlightCurrentFilter} from "./glossaryhelper";
import placeholderImage from "../../assets/generalAssets/img_placeholder.png";
import './glossary.scss';

export default function GlossaryList() {
	const context = useContext(UniversalContext);
	let termImage;
	let termImageSource;
	let glossaryArray = [];

	if (context.glossaryTermImg !== undefined) {
		termImage = context.glossaryTermImg;
		handleTermImage();
	} else {
		termImage = placeholderImage;
		handleMissingTermImage();
	}

	if (context.glossaryTermImgSource !== undefined) {
		termImageSource = context.glossaryTermImgSource;
	}

	if (context.glossaryTerms !== undefined) {
		glossaryArray = context.glossaryTerms;
	}

	// without the second condition, a page refresh yields the error "glossaryArray is undefined"
	// Because glossary terms is only set after the first render (useEffect in App)
	if (context.glossaryTermImg !== undefined && context.glossaryTerms !== undefined) {
		glossaryArray = context.glossaryTerms;
	}

	// Updates displayed terms based on selected filter
	const handleFilterClick = (beginningAlphabetIndex, endingAlphabetIndex, filterRange) => {
		const termsGroup = returnFilteredTerms(beginningAlphabetIndex, endingAlphabetIndex);
		const currentSelection = 'glossary-filter-button-' + filterRange;
		context.setGlossaryTerms(termsGroup);
		highlightCurrentFilter(currentSelection);
	};

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
					onClick={() => handleFilterClick(1, 9, 'A-J')}>
					A - J
				</span>
				<span
					className={'glossary-filter-button'}
					id={'glossary-filter-button-K-S'}
					onClick={() => handleFilterClick(10, 19, 'K-S')}>
					K - S
				</span>
				<span
					className={'glossary-filter-button'}
					id={'glossary-filter-button-T-Z'}
					onClick={() => handleFilterClick(20, 26, 'T-Z')}>
					T - Z
				</span>
			</div>
			<div id={'glossary-term-wrapper'}>{glossaryTermArray}</div>
			<div id={'glossary-term-name'}>{context.currentGlossaryTerm}</div>
			<div id={'glossary-term-def'}>
				{context.glossaryTermDef}
				<div id={'glossary-term-image-wrapper'}>
					<img id={'glossary-term-image'} src={termImage} alt={`${context.currentGlossaryTerm}`}/>
				</div>
				<div id={'glossary-term-image-source-wrapper'}>
					<a id={'glossary-term-image-source'}
					   href={termImageSource}
					   target="_blank"
					   rel="nofollow noopener noreferrer"
					>
						{termImageSource}
					</a>
				</div>
			</div>
		</div>
	);
};
