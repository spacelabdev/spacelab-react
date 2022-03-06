/** This file contains helper function specific to managing the necessary state
 * of various pages where the dynamic search bar may be utilized. */

/**
 * Upon clicking on a search result, inject values into the glossary items which are displayed at the bottom of the
 * page. This helper function is specific to the Glossary page.
 * @param value
 * @param context
 */
export const handleGlossarySearchTermClick = (value, context) => {
	context.setGlossaryTermDef(value[1]);
	context.setCurrentGlossaryTerm(value[0]);
	context.setGlossaryTermImg(value[3]);
	if (value[4] !== undefined) {
		context.setGlossaryTermImgSource(value[4]);
	} else {
		context.setGlossaryTermImgSource("");
	}
};
