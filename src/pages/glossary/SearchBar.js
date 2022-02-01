import React from "react";
import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ placeholder, data }) {
	return (
		<div className="search-bar">
			<div className="searchInputs">
				<input type="text" placeholder={placeholder} />
				<div className="searchIcon">
					<SearchIcon />
				</div>
			</div>
			<div className="dataResult">
				{/* {data.map((value, key) => {
					return <div>{value.glossaryTermArray}</div>;
				})} */}
			</div>
		</div>
	);
}

export default SearchBar;
