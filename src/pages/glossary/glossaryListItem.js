import React, {useContext} from "react";
import {UniversalContext} from "../../App";
import './glossary.css';

export default function OfficeListItem(props) {
	const glossaryTerm = props.element;
	const context = useContext(UniversalContext);

	const handleTermClick = () => {
		context.setGlossaryTermDef(glossaryTerm[1]);
		context.setCurrentGlossaryTerm(glossaryTerm[0])
	};

	return (
		<div className={'glossary-term-container'}>
			<div className={'glossary-term'} onClick={handleTermClick}>{glossaryTerm[0]}</div>
		</div>
	);
};