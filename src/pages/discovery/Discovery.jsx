/**
 * Discovery.jsx
 * Discovery page of the website.
 */

import React, { useContext, useEffect, useState } from "react";
import DiscoveryColumnFilterList from "./discoverySearchFilters/DiscoveryColumnFilterList";
import {
	projectDispositionFiltersArray,
	identificationFiltersArray,
	exoplanetArchiveFiltersArray,
	transitPropertiesFiltersArray,
	thresholdCrossingEventFiltersArray,
	stellarParametersFiltersArray,
	kicParametersFiltersArray,
	pixelBasedKoiVettingFiltersArray,
} from "./discoveryHelper";
import Footer from "../../components/Footer/Footer";
import { getExoplanets } from "../../services/calTechApiRequest";
import { UniversalContext } from "../../App";
import {
	initialiseSelectedColumnsState,
	initialiseWhereFilterState,
} from "./initialiseState";
import DropdownButton from "../../components/styleComponents/buttons/DropDownButton/DropdownButton";
import { downloadData } from "../../services/utilityFunctions";
import "./discovery.scss";
import SimpleButton from "../../components/styleComponents/buttons/SimpleButton/SimpleButton";
import CollapsibleSection from "../../components/CollapsibleSection/CollapsibleSection";
import DataTable from "./table/DataTable";
import Navigation from "../../components/navigation/MainNavigation/MainNavigation";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Discovery() {
	const context = useContext(UniversalContext);
	const [selectedColumns, setSelectedColumns] = useState(
		initialiseSelectedColumnsState()
	);
	const [whereFilter, setWhereFilter] = useState(
		initialiseWhereFilterState()
	);
	const [isSortIconResetNeeded, setIsSortIconResetNeeded] = useState(false);
	const [showLoadingSpinner, setShowLoadingSpinner] = useState(true);

	/**
	 * Query CalTech db and set exoplanetData in App state and store as session var. If a query is sent for the purpose
	 * of downloading the result, the signature of this function allows the provision of an alternative setState
	 * function to ensure that the state for the display of the filtered data (JSON) is not mixed with data responses
	 * for the purpose of downloading filtered results (likely in csv format)
	 * @param format: desired format of API response (empty string -> csv)
	 * @param isStateful: if false, do not set state (needed for download feature)
	 * @param isStorage: if false, API response not saved in storage (needed for download feature)
	 */
	const queryExoplanetDatabase = (
		format = "json",
		isStateful = true,
		isStorage = false
	) => {
		// only send an API request if at least one column has been checked
		if (Object.values(selectedColumns).some((column) => column)) {
			return getExoplanets({
				select: selectedColumns,
				where: whereFilter,
				order: "",
				format: format,
			})
				.then((res) => {
					if (res.status === 200) {
						if (isStateful) {
							let data = res.data;
							if (typeof data === "string") {
								data = parseBinaryDataIntoString(data);
							}
							context.setExoplanetData(data);
						}
						if (isStorage) {
							sessionStorage.setItem(
								"selectedColumns",
								JSON.stringify(selectedColumns)
							);
							sessionStorage.setItem(
								"whereFilter",
								JSON.stringify(whereFilter)
							);
						}
						// ensure that sort icons in data table columns are reset since the newly received data is unsorted
						setIsSortIconResetNeeded(true);
						// Controls loading animation in dataTable.js. Setting to false here hides the loadingSpinner
						// element in dataTable.js
						setShowLoadingSpinner(false);
					} else {
						console.error("error retrieving exoplanetData");
					}
					// return response such that it can be handled by the caller of this promise
					// this is important for the data download function
					return res;
				})
				.catch((e) => console.error(e));
		}
	};

	/**
	 * This method is only relevant for the data set associated with "koi_quarters" which seems to be the only data set
	 * that returns string data, containing 4 byte binary string that is not wrapped in apostrophes. The data is in the
	 * form of "[\n{\"koi_quarters\":01111111111111111000000000000000}\n]\n". The binary cannot be parsed unless it is
	 * wrapped in apostrophes. This function returns the data with all binary data wrapped in apostrophes.
	 * @param data
	 * @return {any}
	 */
	const parseBinaryDataIntoString = (data) => {
		const re = /[01]{32}/g;
		const dataWithBinaryConvertedToString = data.replaceAll(re, (match) => {
			return `"${match}"`;
		});

		return JSON.parse(dataWithBinaryConvertedToString);
	};

	const dropdownItemClick = (e) => {
		let format;
		let dataType;
		let filename;
		switch (e.target.innerHTML) {
			case "json":
				format = "json";
				dataType = "application/json";
				filename = "filtered_output.json";
				break;
			default:
				format = "";
				dataType = "text/csv";
				filename = "filtered_output.csv";
				break;
		}
		queryExoplanetDatabase(format, false, false)
			.then((res) => {
				const data = format === "json" ? JSON.stringify(res.data) : res.data;
				downloadData(data, dataType, filename);
			})
			.catch((e) => console.error(e));
	};
	
	useEffect(queryExoplanetDatabase, []);

	return (
		<>
			<div id="discovery">
				<Navigation></Navigation>
				<h1>Discovery</h1>
				<p className="discovery-description">Explore Kepler Objects of Interest (KOIs) from the NASA Exoplanet Archive by applying the filters below.</p>

				<CollapsibleSection
					className="collapsible"
					title={"Filters"}
				>
					<>
						<p className="filter-instructions">Select the desired filters, then click the "Apply Filters" button below to view the filtered results.</p>

						<CollapsibleSection
							className={"discover-filter-collapsible"}
							title={"Identifications"}
						>
							<DiscoveryColumnFilterList
								filterArray={identificationFiltersArray}
								selectedColumns={selectedColumns}
								setSelectedColumns={setSelectedColumns}
								whereFilter={whereFilter}
								setWhereFilter={setWhereFilter}
							/>
						</CollapsibleSection>
						<CollapsibleSection
							className={"discover-filter-collapsible"}
							title={"Exoplanets"}
						>
							<DiscoveryColumnFilterList
								filterArray={exoplanetArchiveFiltersArray}
								selectedColumns={selectedColumns}
								setSelectedColumns={setSelectedColumns}
								whereFilter={whereFilter}
								setWhereFilter={setWhereFilter}
							/>
						</CollapsibleSection>
						<CollapsibleSection
							className={"discover-filter-collapsible"}
							title={"Dispositions"}
						>
							<DiscoveryColumnFilterList
								filterArray={projectDispositionFiltersArray}
								selectedColumns={selectedColumns}
								setSelectedColumns={setSelectedColumns}
								whereFilter={whereFilter}
								setWhereFilter={setWhereFilter}
							/>
						</CollapsibleSection>
						<CollapsibleSection
							className={"discover-filter-collapsible"}
							title={"Transit Properties"}
						>
							<DiscoveryColumnFilterList
								filterArray={transitPropertiesFiltersArray}
								selectedColumns={selectedColumns}
								setSelectedColumns={setSelectedColumns}
								whereFilter={whereFilter}
								setWhereFilter={setWhereFilter}
							/>
						</CollapsibleSection>
						<CollapsibleSection
							className={"discover-filter-collapsible"}
							title={"Threshold Crossing Events"}
						>
							<DiscoveryColumnFilterList
								filterArray={thresholdCrossingEventFiltersArray}
								selectedColumns={selectedColumns}
								setSelectedColumns={setSelectedColumns}
								whereFilter={whereFilter}
								setWhereFilter={setWhereFilter}
							/>
						</CollapsibleSection>
						<CollapsibleSection
							className={"discover-filter-collapsible"}
							title={"Stellar Parameters"}
						>
							<DiscoveryColumnFilterList
								filterArray={stellarParametersFiltersArray}
								selectedColumns={selectedColumns}
								setSelectedColumns={setSelectedColumns}
								whereFilter={whereFilter}
								setWhereFilter={setWhereFilter}
							/>
						</CollapsibleSection>
						<CollapsibleSection
							className={"discover-filter-collapsible"}
							title={"KIC Parameters"}
						>
							<DiscoveryColumnFilterList
								filterArray={kicParametersFiltersArray}
								selectedColumns={selectedColumns}
								setSelectedColumns={setSelectedColumns}
								whereFilter={whereFilter}
								setWhereFilter={setWhereFilter}
							/>
						</CollapsibleSection>
						<CollapsibleSection
							className={"discover-filter-collapsible"}
							title={"Pixel Based KOI Vetting"}
						>
							<DiscoveryColumnFilterList
								filterArray={pixelBasedKoiVettingFiltersArray}
								selectedColumns={selectedColumns}
								setSelectedColumns={setSelectedColumns}
								whereFilter={whereFilter}
								setWhereFilter={setWhereFilter}
							/>
						</CollapsibleSection>

						{/* Buttons */}
						<div className="filter-buttons">
							<div id="searchBttn">
								<SimpleButton
									buttonName={"Apply Filters"}
									buttonEffectAsync={() =>
										queryExoplanetDatabase(
											"json",
											true,
											true
										)
									}
								/>
							</div>
							<DropdownButton
								buttonLabel={"Download"}
								dropdownItemClick={dropdownItemClick}
								item1={{ label: "csv" }}
								item2={{ label: "json" }}
							/>
						</div>
					</>
				</CollapsibleSection>

				{/* Discoveries Table */}
				<div className="discoveries-table">
					<DataTable
						isSortIconResetNeeded={isSortIconResetNeeded}
						setIsSortIconResetNeeded={setIsSortIconResetNeeded}
						showLoadingSpinner={showLoadingSpinner}
					/>
				</div>
			</div>
			<Footer />
		</>
	);
}
