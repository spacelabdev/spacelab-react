import React, { useContext, useEffect, useRef, useState } from "react";
import "./SearchBar.scss";
import searchIcon from "../../assets/componentAssets/magnifying_glass@0.5x.png";
import closeIcon from "../../assets/componentAssets/close-icon@0.5x.png";
import { UniversalContext } from "../../App";

function SearchBar({ placeholder, data }) {
	const context = useContext(UniversalContext);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredSearchResults, setFilteredSearchResults] = useState([]);
	const [isSearchBarActive, setIsSearchBarActive] = useState(false)
	const [filteredSearchResultIndex, setFilteredSearchResultIndex] = useState(null)
	const searchResultsDiv = useRef()

	/**
	 * Make input element a controlled element - handle change inside the search bar input element
	 * @param e
	 */
	const handleChange = (e) => {
		setSearchTerm(e.target.value)
	}

	/**
	 * Filter data for searchTerm and store result in state. Note: at initial render time the state of the filtered data
	 * is an empty array. If the user types a string into the search bar the filteredSearchResults array gets updated with the
	 * filter result after every key stroke. If the user back-tracks, deleting all their inputs, the resulting
	 * filteredSearchResults array would not be empty but rather include all data items. To control for this, the conditional
	 * statement assigns an empty array to the filteredSearchResults if the searchTerm is an empty string.
	 */
	useEffect(() => {
		if (isSearchBarActive) {
			if (searchTerm) {
				// if more than one word is typed into the search box we want to make sure that all words match
				// independently and jointly
				const words = searchTerm.split(" ");

				// todo: implement Levenshtein function to control for simple spelling errors and use some sort of fuzzy search
				// check that all words are included in the filtered result
				const newFilter = data.filter((value) => {
					return words.every(word => value[0].toLowerCase().includes(word.toLowerCase()));
				});

				// set filtered result in state
				setFilteredSearchResults(newFilter);
			}
			else {
				// set filtered result in state to the empty string
				setFilteredSearchResults([]);
				setFilteredSearchResultIndex(null)
			}
		}
		// eslint-disable-next-line
	},[searchTerm]);

	/**
	 * Return the Levenshtein distance between the search string and the target string (data base)
	 * @param searchString
	 * @param targetString
	 */
	const levenshteinDistance = (searchString, targetString) => {
		// edits matrix is a 2d matrix that will eventually contain the min number of operations (delete, add, or substitute char)
		const editsMatrix = []

		// define dimensions of matrix
		const columns = searchString.length
		const rows = targetString.length

		//  create edits matrix; note that the first col and row are reserved for the empty-string, hence the need for
		//  one more row and column
		for (let row = 0; row < rows + 1; row++) {
			const rowArray = []
			for (let col = 0; col < columns + 1; col++) {
				rowArray.push(col)
			}
			editsMatrix.push(rowArray)
		}

		// adjust edits table for targetString
		for (let row = 0; row < rows + 1; row++) {
			editsMatrix[row][0] = row
		}

		for (let row = 1; row < rows + 1; row++) {
			for (let col = 1; col < columns + 1; col++) {
				if (searchString[row] === targetString[col]) {
					editsMatrix[row][col] = editsMatrix[row-1][col-1]
				}
				else {
					editsMatrix[row][col] = 1 + Math.min(editsMatrix[row-1][col], editsMatrix[row][col-1], editsMatrix[row-1][col-1])
				}
			}
		}

		return editsMatrix[rows][columns]
	}

	/* Clearing the input when function is called onClick of the close icon */
	const clearInput = () => {
		setFilteredSearchResults([]);
		setSearchTerm("");
		setIsSearchBarActive(false)
		setFilteredSearchResultIndex(null)
		// if the user uses the enter key to select filtered search term, this line removes focus from the search box
		document.activeElement.blur()
	};

	/**
	 * Upon clicking on a search result, inject values into the glossary items which are displayed at the bottom of the
	 * page
	 * @param value
	 */
	const handleSearchTermClick = (value) => {
		context.setGlossaryTermDef(value[1]);
		context.setCurrentGlossaryTerm(value[0]);
		context.setGlossaryTermImg(value[3]);
		if (value[4] !== undefined) {
			context.setGlossaryTermImgSource(value[4]);
		} else {
			context.setGlossaryTermImgSource("");
		}
		clearInput()
	};

	/**
	 * If the search bar is in focus set the associated state to true. This is necessary for two reasons. 1) search
	 * function only needs to run if search bar is focused. 2) the search bar icon element is separate div which has
	 * styling elements (e.g. border when in focus) that depend on the search bar div being in focus.
	 * @param e
	 */
	const handleOnFocus = (e) => {
		setIsSearchBarActive(true)
	}

	/**
	 * Remove search results div from the DOM if the user clicks on anything else except the search results div
	 * @param e
	 */
	const handleOnBlur = (e) => {
		if (!e.relatedTarget?.className.includes("search-result")) {
			setIsSearchBarActive(false)
			setFilteredSearchResultIndex(null)
		}
	}

	/**
	 * If the user presses the down or up key he can cycle through the results
	 * @param e
	 */
	const handleSearchResultSelection = (e) => {
		// if a search term has been entered give the user the ability to cycle through search results with up and down
		// keys
		if (searchTerm) {
			if (e.key === "ArrowDown") {
				changeSelectedSearchResult(1)
			}
			if (e.key === "ArrowUp") {
				changeSelectedSearchResult(-1)
			}
			if (e.key === "Enter") {
				const searchResult = filteredSearchResults[filteredSearchResultIndex]
				handleSearchTermClick(searchResult)
			}
		}
	}

	/**
	 * Calculate the new index position based on the users' up or down-key commands and store in
	 * filteredSearchResultIndex state. The index position is bounded as follows: [0, filteredSearchResults.length - 1]
	 * @param change
	 */
	const changeSelectedSearchResult = (change) => {
		// initiate filteredSearchResultIndex is it is uninitiated
		if (filteredSearchResultIndex === null) {
			if (change === 1) {
				setFilteredSearchResultIndex(0)
			}
			else {
				setFilteredSearchResultIndex(filteredSearchResults.length - 1)
				scrollToSearchResult(filteredSearchResults.length - 1)
			}
		}
		else {
			const newIndex = filteredSearchResultIndex + change
			const modulatedNewIndex = newIndex % filteredSearchResults.length
			if (modulatedNewIndex >= 0) {
				setFilteredSearchResultIndex(modulatedNewIndex)
				scrollToSearchResult(modulatedNewIndex)
			}
			else {
				// invert index position since JS cannot deal with negative array index positions
				const invertedModulatedNewIndex = filteredSearchResults.length + modulatedNewIndex
				setFilteredSearchResultIndex(invertedModulatedNewIndex)
				scrollToSearchResult(invertedModulatedNewIndex)
			}
		}
	}

	// todo: fix inadvertent scrolling of browser window
	/**
	 * Scroll to the selected search term, if selection is made with the arrow keys
	 * @param nThChild
	 */
	const scrollToSearchResult = (nThChild) => {
		// get search result element at nThChild position
		const searchResultsContainer = document.getElementById("search-results-container")
		const selectedChild = searchResultsContainer.children[nThChild]
		selectedChild.scrollIntoView({behavior: "smooth", block: "center"})
	}

	return (
		<div className="search-bar">
			<div id={"search-bar-div"}>
				<div id={"searchInputs"}>
					<input
						type="search"
						placeholder={placeholder}
						value={searchTerm}
						onChange={handleChange}
						onFocus={handleOnFocus}
						onBlur={handleOnBlur}
						onKeyDown={handleSearchResultSelection}
					/>
					<div id="search-icon-div" className={isSearchBarActive ? "focused" : ""}>
						{searchTerm.length === 0 ? (
							<img src={searchIcon} alt={"magnifying glass"} />
						) : (
							<img src={closeIcon} alt={"grey x"} id="clear-button" onClick={clearInput} />
						)}
					</div>
				</div>
				{/* Display the results div only if search bar is in focus and if there is some filtered data */}
				{isSearchBarActive && filteredSearchResults.length > 0 && (
					<div
						id={"search-results-container"}
						ref={searchResultsDiv}
					>
						{/* mapping of dictionary words only; could extend search across dictionary definitions if needed */}
						{filteredSearchResults.map((searchResult, key) => (
							<div
								className={`search-result ${filteredSearchResultIndex === key ? "selected-search-result" : ""}` }
								key={key}
								onClick={() => handleSearchTermClick(searchResult)}
								tabIndex={0}
							>
								{searchResult[0]}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default SearchBar;
