import React, { useContext, useEffect, useState } from "react";
import HeroImage from "../../components/heroImage/heroImage";
import * as ReactBootStrap from 'react-bootstrap'
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
import "./discovery.scss";
import Footer from "../../components/footer/footer";
import UnderConstruction from "../../components/underConstructionNotification/underConstruction";
import { getExoplanets } from "../../services/calTechApiRequest";
import { UniversalContext } from "../../App";
import {
	initialiseSelectedColumnsState,
	initialiseWhereFilterState,
} from "./initialiseState";
import DropdownButton from "../../components/button/dropdownButton";


/**
 *
 * @return {JSX.Element}
 * @constructor
 */
export default function Discovery() {
	const context = useContext(UniversalContext);
	// todo: [Sven Gerlach] given that API returns are saved in session storage it would make sense to store and set state for the checkboxes in App instead
	const [selectedColumns, setSelectedColumns] = useState(initialiseSelectedColumnsState())
	const [whereFilter, setWhereFilter] = useState(initialiseWhereFilterState())
	const discTable = [
		{
			name: "",
			lightYrs: "",
			planetMass: "",
			stellarMag: "",
			discoveryDt: "",
		},
	]

	const renderDiscTable = (discTable, index) => {
		return (
			<tr key={index}>
				<td>{discTable.name}</td>
				<td>{discTable.lightYrs}</td>
				<td>{discTable.planetMass}</td>
				<td>{discTable.stellarMag}</td>
				<td>{discTable.discoveryDt}</td>
			</tr>
		)
	}

	console.log(context.exoplanetData)

	/**
	 * Query CalTech db and set exoplanetData in App state and store as session var
	 * @return {Promise<void>}
	 */
	const queryExoplanetDatabase = () => {
		// only send an API request if at least one column has been checked
		if (Object.values(selectedColumns).some(column => column)) {
			getExoplanets({
				select: selectedColumns,
				where: whereFilter,
				order: ''
			}).then(res => {
				if (res.status === 200) {
					context.setExoplanetData(res.data);
					/*  todo: why store this in session storage at all? */
					sessionStorage.setItem('exoplanetSearchResults', JSON.stringify(res.data));
				} else {
					console.error("error retrieving exoplanetData");
				}
			}).catch(e => console.error(e));
		}
	};

	// make API call after selectedColumns and whereFilter states have been initialised but only once at component
	// mount-time
	useEffect(queryExoplanetDatabase, [])

	return (
		<>
			<HeroImage/>
			<div id={'discovery-title'}>Current Discoveries</div>
			<div id={"database-search-wrapper"}>
				<div id="discovery-table">
					<UnderConstruction/>
					<ReactBootStrap.Table striped bordered hover size="sm">
						<thead>
						{/*<tr>*/}
						{/*	<th>Name</th>*/}
						{/*	<th>Light Years From Earth</th>*/}
						{/*	<th>Planet Mass</th>*/}
						{/*	<th>Stellar Magnitude</th>*/}
						{/*	<th>Discovery Date</th>*/}
						{/*</tr>*/}
						</thead>
						<tbody>
						{discTable.map(renderDiscTable)}
						</tbody>
					</ReactBootStrap.Table>
					<br/>
				</div>
				<div id="searchBttn">
				</div>
				<br/>

				<div id={"filtersContainer"}>
					<div id={"filtersHeader"}>
						<p>Filters</p>
						<DropdownButton
							buttonLabel={'Download'}
							item1={{ href: "#/action-1", label: "csv" }}
							item2={{ href: "#/action-2", label: "json" }}
						/>
					</div>
					<DiscoveryColumnFilterList
						filterArray={identificationFiltersArray}
						title={"Identifications"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
						queryExoplanetDatabse={queryExoplanetDatabase}
					/>
					<DiscoveryColumnFilterList
						filterArray={exoplanetArchiveFiltersArray}
						title={"Exoplanets"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
						queryExoplanetDatabse={queryExoplanetDatabase}
					/>
					<DiscoveryColumnFilterList
						filterArray={projectDispositionFiltersArray}
						title={"Dispositions"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
						queryExoplanetDatabse={queryExoplanetDatabase}
					/>
					<DiscoveryColumnFilterList
						filterArray={transitPropertiesFiltersArray}
						title={"Transit Properties"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
						queryExoplanetDatabse={queryExoplanetDatabase}
					/>
					<DiscoveryColumnFilterList
						filterArray={thresholdCrossingEventFiltersArray}
						title={"Threshold Crossing Events"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
						queryExoplanetDatabse={queryExoplanetDatabase}
					/>
					<DiscoveryColumnFilterList
						filterArray={stellarParametersFiltersArray}
						title={"Stellar Parameters"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
						queryExoplanetDatabse={queryExoplanetDatabase}
					/>
					<DiscoveryColumnFilterList
						filterArray={kicParametersFiltersArray}
						title={"KIC Parameters"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
						queryExoplanetDatabse={queryExoplanetDatabase}
					/>
					<DiscoveryColumnFilterList
						filterArray={pixelBasedKoiVettingFiltersArray}
						title={"Pixel Based KOI Vetting"}
						selectedColumns={selectedColumns}
						setSelectedColumns={setSelectedColumns}
						whereFilter={whereFilter}
						setWhereFilter={setWhereFilter}
						queryExoplanetDatabse={queryExoplanetDatabase}
					/>
				</div>
			</div>
			<Footer/>
		</>
	);
};
