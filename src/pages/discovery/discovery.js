import React, {useContext, useEffect, useState, useMemo} from "react";
import HeroImage from "../../components/heroImage/heroImage";
import DiscoveryColumnFilterList from "./discoverySearchFilters/discoveryColumnFilterList";
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
import Footer from "../../components/footer/footer";
import UnderConstruction from "../../components/underConstructionNotification/underConstruction";
import {getExoplanets} from "../../services/calTechApiRequest";
import {UniversalContext} from "../../App";
import {initialiseSelectedColumnsState, initialiseWhereFilterState} from "./initialiseState";
import DropdownButton from "../../components/button/dropdownButton";
import {downloadData} from "../../services/utilityFunctions";
import "./discovery.scss";
import SimpleButton from "../../components/button/simpleButton";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Discovery() {
	const context = useContext(UniversalContext);
	const [selectedColumns, setSelectedColumns] = useState(initialiseSelectedColumnsState());
	const [whereFilter, setWhereFilter] = useState(initialiseWhereFilterState());

	/**
	 * Query CalTech db and set exoplanetData in App state and store as session var. If a query is sent for the purpose
	 * of downloading the result, the signature of this function allows the provision of an alternative setState
	 * function to ensure that the state for the display of the filtered data (JSON) is not mixed with data responses
	 * for the purpose of downloading filtered results (likely in csv format)
	 * @param format: desired format of API response (empty string -> csv)
	 * @param isStateful: if false, do not set state (needed for download feature)
	 * @param isStorage: if false, API response not saved in storage (needed for download feature)
	 */
	const queryExoplanetDatabase = (format = 'json', isStateful = true, isStorage = false) => {
		// only send an API request if at least one column has been checked
		if (Object.values(selectedColumns).some(column => column)) {
			return getExoplanets({
				select: selectedColumns,
				where: whereFilter,
				order: '',
				format: format,
			}).then(res => {
				if (res.status === 200) {
					if (isStateful) {
						context.setExoplanetData(res.data);
					}
					if (isStorage) {
						sessionStorage.setItem('selectedColumns', JSON.stringify(selectedColumns));
						sessionStorage.setItem('whereFilter', JSON.stringify(whereFilter));
					}
				} else {
					console.error("error retrieving exoplanetData");
				}
				// return response such that it can be handled by the caller of this promise
				// this is important for the data download function
				return res;
			}).catch(e => console.error(e));
		}
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
			case 'json':
				format = 'json';
				dataType = 'application/json';
				filename = 'filtered_output.json';
				break;
			// Default case is the csv file format
			default:
				// as per API, empty string for format requires a csv data response
				format = '';
				dataType = 'text/csv';
				filename = 'filtered_output.csv';
				break;
		}

		// make API request with specified data type format (Note: empty string = csv)
		queryExoplanetDatabase(format, false, false)
			.then(res => {
				// stringify data only if format is json
				const data = format === 'json' ? JSON.stringify(res.data) : res.data;
				downloadData(data, dataType, filename);
			})
			.catch(e => console.error(e));
	}

	return (
		<>
			<HeroImage/>
			<div id={'discovery-title'}>Current Discoveries</div>
			<div id={"database-search-wrapper"}>

				<div id="discovery-table">
					<UnderConstruction/>
					<p>
						Please excuse our dust. While the database search, and search result export functionalities are
						live, data display table is still under construction.
					</p>
				</div>

				<div id={"filtersContainer"}>
					<div id={"filtersHeader"}>
						<p>Filters</p>
						<div id={'discovery-filter-buttons-container'}>
							<div id="searchBttn">
								<SimpleButton
									buttonName={"Update"}
									buttonEffectAsync={() => queryExoplanetDatabase("json", true, true)}
								/>
							</div>
							<DropdownButton
								buttonLabel={'Download'}
								dropdownItemClick={dropdownItemClick}
								item1={{href: "#/action-1", label: "csv"}}
								item2={{href: "#/action-2", label: "json"}}
							/>
						</div>
					</div>
					<DiscoveryColumnFilterList
						filterArray={identificationFiltersArray}
						title={"Identifications"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
					/>
					<DiscoveryColumnFilterList
						filterArray={exoplanetArchiveFiltersArray}
						title={"Exoplanets"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
					/>
					<DiscoveryColumnFilterList
						filterArray={projectDispositionFiltersArray}
						title={"Dispositions"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
					/>
					<DiscoveryColumnFilterList
						filterArray={transitPropertiesFiltersArray}
						title={"Transit Properties"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
					/>
					<DiscoveryColumnFilterList
						filterArray={thresholdCrossingEventFiltersArray}
						title={"Threshold Crossing Events"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
					/>
					<DiscoveryColumnFilterList
						filterArray={stellarParametersFiltersArray}
						title={"Stellar Parameters"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
					/>
					<DiscoveryColumnFilterList
						filterArray={kicParametersFiltersArray}
						title={"KIC Parameters"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
					/>
					<DiscoveryColumnFilterList
						filterArray={pixelBasedKoiVettingFiltersArray}
						title={"Pixel Based KOI Vetting"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
					/>
				</div>
			</div>
			<Footer/>
		</>
	);
};
