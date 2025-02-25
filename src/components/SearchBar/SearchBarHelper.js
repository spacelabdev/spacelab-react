/**
 * SearchBarHelper.js
 * Helper function to find a given glossary entry on a page.
 */

export const handleGlossarySearchTermClick = (searchResult) => {
	const glossaryTerm = searchResult.term;
	
	// term not found
	if (!glossaryTerm) return;
  
	// scroll to term
	const glossaryEntryElement = document.getElementById(glossaryTerm);
	if (glossaryEntryElement) {
		glossaryEntryElement.scrollIntoView({
			block: "center",
		});
	}
};  