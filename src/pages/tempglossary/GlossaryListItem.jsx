import React, { useContext } from "react";
import { UniversalContext } from "../../App";
import Chip from "../../components/styleComponents/Chip/Chip";
import "./glossary.scss";

/**
 * Renders individual glossary terms
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function GlossaryListItem(props) {
	const glossaryTerm = props.element;
	const context = useContext(UniversalContext);

	const handleTermClick = () => {
		context.setGlossaryTermDef(glossaryTerm[1]);
		context.setCurrentGlossaryTerm(glossaryTerm[0]);
		context.setGlossaryTermImg(glossaryTerm[3]);
		if (glossaryTerm[4] !== undefined) {
			context.setGlossaryTermImgSource(glossaryTerm[4]);
		} else {
			context.setGlossaryTermImgSource("");
		}
	};

	return (
		<div className={"glossary-term-container"}>
			<Chip
				id={`glossary-term- ${glossaryTerm[0]}`}
				tag={glossaryTerm[0]}
				onClick={handleTermClick}
			/>
		</div>
	);
}
