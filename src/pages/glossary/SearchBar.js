import React, { useContext, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { UniversalContext } from "../../App";

function SearchBar({ placeholder, data }) {
	const context = useContext(UniversalContext);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredData, setFilteredData] = useState([]);
	const noResults = ["No Results"];

	/**
	 * Make input element a controlled element
	 * @param e
	 */
	const handleChange = (e) => {
		setSearchTerm(e.target.value)
		handleFilter()
	}

	/**
	 * Filter data for searchTerm and
	 */
	const handleFilter = () => {
		const newFilter = data.filter((value) => {
			return value[0].toLowerCase().includes(searchTerm.toLowerCase());
		});
		/* if something is typed into the input, show the new filtered list */
		if (searchTerm === "" || newFilter === "") {
			setFilteredData([noResults]);
		} else {
			setFilteredData(newFilter);
		}
	};


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
						{console.log(filteredData.length)}
						{filteredData.length > 0
							? filteredData.map((value, key) => {
								return (
									<div className="dataItem" key={key} onClick={() => handleSearchTermClick(value)}>
										{value[0]}
									</div>
								);
							})
							: <div className="dataItem" >"no matches found"</div>
						}
					</div>
				)}
			</div>
		</div>
	);
}

export default SearchBar;
