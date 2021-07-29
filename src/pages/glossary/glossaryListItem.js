import React from "react";
import './glossary.css';

export default function OfficeListItem(props) {
	const glossaryTerm = props.element;

	return (
		<div className={'glossary-term-container'}>
			<div className={'glossary-term'}>{glossaryTerm[0]}</div>
			<div className={'glossary-term-def'}>{glossaryTerm[1]}</div>
		</div>
	);
};