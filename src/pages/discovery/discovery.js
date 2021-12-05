import React, { useContext, useState } from "react";
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
import initialiseCheckedState from "./initialiseCheckedState";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Discovery() {
	const context = useContext(UniversalContext);
	// todo: [Sven Gerlach] given that API returns are saved in session storage it would make sense to store and set state for the checkboxes in App instead
	const [checkedColumns, setCheckedColumns] = useState(initialiseCheckedState())
	const [numberFilter, setNumberFilter] = useState({})
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
	console.log(checkedColumns)
	console.log(numberFilter)

	/**
	 * Query CalTech db and set exoplanetData in App state and store as session var
	 * @return {Promise<void>}
	 */
	const queryExoplanetDatabase = async () => {
		await getExoplanets({
			select: checkedColumns,
			where: 'koi_score>0.999',
			order: ''
		}).then(res => {
			if (res.status === 200) {
				context.setExoplanetData(res.data);
				/*  todo: why store this in session storage at all? */
				sessionStorage.setItem('exoplanetSearchResults', JSON.stringify(res.data));
			} else {
				console.error("error retrieving exoplanetData");
			}
		}).catch(e => {
			console.error(e);
		});
	};

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
					<p>Filters</p>
					<DiscoveryColumnFilterList
						filterArray={identificationFiltersArray}
						title={"Identifications"}
						checked={checkedColumns}
						setChecked={setCheckedColumns}
						numberFilter={numberFilter}
						setNumberFilter={setNumberFilter}
					/>
					<DiscoveryColumnFilterList
						filterArray={exoplanetArchiveFiltersArray}
						title={"Exoplanets"}
						checked={checkedColumns}
						setChecked={setCheckedColumns}
						numberFilter={numberFilter}
						setNumberFilter={setNumberFilter}
					/>
					<DiscoveryColumnFilterList
						filterArray={projectDispositionFiltersArray}
						title={"Dispositions"}
						checked={checkedColumns}
						setChecked={setCheckedColumns}
						numberFilter={numberFilter}
						setNumberFilter={setNumberFilter}
					/>
					<DiscoveryColumnFilterList
						filterArray={transitPropertiesFiltersArray}
						title={"Transit Properties"}
						checked={checkedColumns}
						setChecked={setCheckedColumns}
						numberFilter={numberFilter}
						setNumberFilter={setNumberFilter}
					/>
					<DiscoveryColumnFilterList
						filterArray={thresholdCrossingEventFiltersArray}
						title={"Threshold Crossing Events"}
						checked={checkedColumns}
						setChecked={setCheckedColumns}
						numberFilter={numberFilter}
						setNumberFilter={setNumberFilter}
					/>
					<DiscoveryColumnFilterList
						filterArray={stellarParametersFiltersArray}
						title={"Stellar Parameters"}
						checked={checkedColumns}
						setChecked={setCheckedColumns}
						numberFilter={numberFilter}
						setNumberFilter={setNumberFilter}
					/>
					<DiscoveryColumnFilterList
						filterArray={kicParametersFiltersArray}
						title={"KIC Parameters"}
						checked={checkedColumns}
						setChecked={setCheckedColumns}
						numberFilter={numberFilter}
						setNumberFilter={setNumberFilter}
					/>
					<DiscoveryColumnFilterList
						filterArray={pixelBasedKoiVettingFiltersArray}
						title={"Pixel Based KOI Vetting"}
						checked={checkedColumns}
						setChecked={setCheckedColumns}
						numberFilter={numberFilter}
						setNumberFilter={setNumberFilter}
					/>
					{/* todo: [Sven Gerlach] button styling */}
					<ReactBootStrap.Button
						variant={"primary"}
						onClick={queryExoplanetDatabase}
					>Filter</ReactBootStrap.Button>
				</div>
			</div>
			<Footer/>
		</>
	);
};
