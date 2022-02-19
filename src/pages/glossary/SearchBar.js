import React, { useContext, useEffect, useRef, useState } from "react";
import "./SearchBar.scss";
import searchIcon from "../../assets/componentAssets/magnifying_glass@0.5x.png";
import closeIcon from "../../assets/componentAssets/close-icon@0.5x.png";
import { UniversalContext } from "../../App";

function SearchBar({ placeholder, data }) {
	const context = useContext(UniversalContext);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredData, setFilteredData] = useState([]);
	const [isSearchBarActive, setIsSearchBarActive] = useState(false)
	const searchResultsDiv = useRef()

	/**
	 * Make input element a controlled element
	 * @param e
	 */
	const handleChange = (e) => {
		setSearchTerm(e.target.value)
	}

	/**
	 * Filter data for searchTerm and
	 */
	useEffect(() => {
		if (isSearchBarActive) {
			if (searchTerm) {
				// if more than one word is typed into the search box we want to make sure that all words match
				// independently and jointly
				const words = searchTerm.split(" ");

				// check that all words are included in the filtered result
				const newFilter = data.filter((value) => {
					return words.every(word => value[0].toLowerCase().includes(word.toLowerCase()));
				});

				// set filtered result in state
				setFilteredData(newFilter);
			}
			else {
				// set filtered result in state to the empty string
				setFilteredData("");
			}
		}
		// eslint-disable-next-line
	},[searchTerm]);

	/* Clearing the input when function is called onClick of the close icon */
	const clearInput = () => {
		setFilteredData([]);
		setSearchTerm("");
		setIsSearchBarActive(false)
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
	 * Remove search results div from the DOM if the user clicks on anything else except the search results div
	 * @param e
	 */
	const handleOnBlur = (e) => {
		if (e.relatedTarget?.parentNode !== searchResultsDiv.current) {
			setIsSearchBarActive(false)
		}
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
						onFocus={() => setIsSearchBarActive(true)}
						onBlur={handleOnBlur}
					/>
					<div id="searchIconDiv">
						{searchTerm.length === 0 ? (
							<img src={searchIcon} alt={"magnifying glass"} />
						) : (
							<img src={closeIcon} alt={"grey x"} id="clearBtn" onClick={clearInput} />
						)}
					</div>
				</div>
				{/* Display the results div only if search bar is in focus and if there is some filtered data */}
				{isSearchBarActive && filteredData.length > 0 && (
					<div
						className="dataResult"
						tabIndex={"0"}
						ref={searchResultsDiv}
					>
						{/* just the search term (idex position 0) is mapped, not the definition. Can change this to definitions as well eventually */}
						{filteredData.map((value, key) => (
							<div
								className="dataItem"
								key={key}
								onClick={() => handleSearchTermClick(value)}
								tabIndex={"0"}
							>
								{value[0]}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default SearchBar;
