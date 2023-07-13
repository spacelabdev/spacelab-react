import React, { useContext, useEffect, useState } from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
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
import "./Discovery.scss";
import SimpleButton from "../../components/styleComponents/buttons/SimpleButton/SimpleButton";
import CollapsibleSection from "../../components/CollapsibleSection/CollapsibleSection";
import DataTable from "./table/DataTable";

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

	// Make API call after selectedColumns and whereFilter states have been initialised but only once at component
	// mount-time. Disabling the eslint warning in the next line since providing an empty dependency array is done
	// intentionally. The callback is only invoked once at component mount time. Providing the callback's
	// dependencies would execute the callback function everytime the dependencies change - an effect that is not
	// desired in this case. The next line disables the eslint alert.
	// eslint-disable-next-line
	useEffect(queryExoplanetDatabase, []);

	/**
	 * This function is passed as a prop to the dropdown item and is executed when the user clicks on the item
	 */
	const dropdownItemClick = (e) => {
		// set format, dataType, and filename, subject to selected data type
		let format;
		let dataType;
		let filename;
		switch (e.target.innerHTML) {
			case "json":
				format = "json";
				dataType = "application/json";
				filename = "filtered_output.json";
				break;
			// Default case is the csv file format
			default:
				// as per API, empty string for format requires a csv data response
				format = "";
				dataType = "text/csv";
				filename = "filtered_output.csv";
				break;
		}

		// make API request with specified data type format (Note: empty string = csv)
		queryExoplanetDatabase(format, false, false)
			.then((res) => {
				// stringify data only if format is json
				const data =
					format === "json" ? JSON.stringify(res.data) : res.data;
				downloadData(data, dataType, filename);
			})
			.catch((e) => console.error(e));
	};

	return (
		<>
			<HeroImage heroTitle="DISCOVERY" />
			<div id={"discovery-title"}>Current Discoveries</div>
			<div id={"database-search-wrapper"}>
				<DataTable
					isSortIconResetNeeded={isSortIconResetNeeded}
					setIsSortIconResetNeeded={setIsSortIconResetNeeded}
					showLoadingSpinner={showLoadingSpinner}
				/>
				<div id={"filtersContainer"}>
					<div id={"filtersHeader"}>
						<p>Filters</p>
						<div id={"discovery-filter-buttons-container"}>
							<div id="searchBttn">
								<SimpleButton
									buttonName={"Filter"}
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
								item1={{ href: "#/action-1", label: "csv" }}
								item2={{ href: "#/action-2", label: "json" }}
							/>
						</div>
					</div>
					<CollapsibleSection
						className={"discover-filter-collapsible"}
						title={"Identifications"}
						defaultOpen={true}
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
						defaultOpen={true}
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
				</div>
			</div>
			<Footer />
		</>
	);
}
