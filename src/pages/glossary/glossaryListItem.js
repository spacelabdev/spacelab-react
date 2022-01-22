import React, {useContext} from "react";
import {UniversalContext} from "../../App";
import './glossary.scss';

export default function OfficeListItem(props) {
	const glossaryTerm = props.element;
	const context = useContext(UniversalContext);

	const handleTermClick = () => {
		context.setGlossaryTermDef(glossaryTerm[1]);
		context.setCurrentGlossaryTerm(glossaryTerm[0]);
		context.setGlossaryTermImg(glossaryTerm[3]);
		if (glossaryTerm[4] !== undefined) {
			context.setGlossaryTermImgSource(glossaryTerm[4]);
		}
		else {
			context.setGlossaryTermImgSource('');
		}
	};

	return (
		<div className={'glossary-term-container'}>
			<div
				className={'glossary-term'}
				id={`glossary-term- ${glossaryTerm[0]}`}
				onClick={handleTermClick}>{glossaryTerm[0]}
			</div>
		</div>
	);
};