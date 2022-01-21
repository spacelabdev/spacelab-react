import React, { useState } from "react";
import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ placeholder, data }) {
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

	return (
		<div className="search-bar">
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
					{filteredData.slice(0, 10).map((value, key) => {
						return (
							<div className="dataItem">
								<p>{value[0]}</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default SearchBar;
