import React, { useContext, useEffect, useRef, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { UniversalContext } from "../../App";

function SearchBar({ placeholder, data }) {
	const context = useContext(UniversalContext);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredData, setFilteredData] = useState([]);
	const [isSearchBarActive, setIsSearchBarActive] = useState(false)

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
		// eslint-disable-next-line
	},[searchTerm]);

	/* Clearing the input when function is called onClick of the close icon */
	const clearInput = () => {
		setFilteredData([]);
		setSearchTerm("");
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
	};

	return (
		<div className="search-bar">
			<div className="search-bar-div">
				<div className="searchInputs">
					<input
						type="text"
						placeholder={placeholder}
						value={searchTerm}
						onChange={handleChange}
						/*// ref={searchBar}*/
						onFocus={() => setIsSearchBarActive(true)}
						onBlur={() => setIsSearchBarActive(false)}
					/>
					<div className="searchIcon">
						{filteredData.length === 0 ? (
							<SearchIcon />
						) : (
							<CloseIcon id="clearBtn" onClick={clearInput} />
						)}
					</div>
				</div>
				{/* Display the results div only if search bar is in focus and if there is some filtered data */}
				{isSearchBarActive && filteredData.length > 0 && (
					<div className="dataResult">
						{/* just the search term (idex position 0) is mapped, not the definition. Can change this to definitions as well eventually */}
						{filteredData.map((value, key) => (
							<div className="dataItem" key={key} onClick={() => handleSearchTermClick(value)}>
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
