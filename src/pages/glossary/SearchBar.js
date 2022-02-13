import React, { useContext, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { UniversalContext } from "../../App";

function SearchBar({ placeholder, data }) {
	const context = useContext(UniversalContext);
	const [filteredData, setFilteredData] = useState([]);
	const [enteredWord, setEnteredWord] = useState("");

	/*Filtering the searches when something is typed in the input */
	const handleFilter = (event) => {
		const searchWord = event.target.value;
		setEnteredWord(searchWord);
		const newFilter = data.filter((value) => {
			return value[0].toLowerCase().includes(searchWord.toLowerCase());
		});
		/* if something is typed into the input, show the new filtered list */
		if (searchWord === "") {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};
	/* Clearing the input when function is called onClick of the close icon */
	const clearInput = () => {
		setFilteredData([]);
		setEnteredWord("");
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
			context.setGlossaryTermImgSource('');
		}
	}

	return (
		<div className="search-bar">
			<div className="search-bar-div">
				<div className="searchInputs">
					<input
						type="text"
						placeholder={placeholder}
						value={enteredWord}
						onChange={handleFilter}
					/>
					<div className="searchIcon">
						{filteredData.length === 0 ? (
							<SearchIcon />
						) : (
							<CloseIcon id="clearBtn" onClick={clearInput} />
						)}
					</div>
				</div>
				{filteredData.length !== 0 && (
					<div className="dataResult">
						{/* just the search term (idex position 0) is mapped, not the definition. Can change this to definitions as well eventually */}
						{filteredData.slice(0, 23).map((value, key) => {
							return (
								<div className="dataItem" key={key}>
									<a onClick={() => handleSearchTermClick(value)}>{value[0]}</a>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}

export default SearchBar;
