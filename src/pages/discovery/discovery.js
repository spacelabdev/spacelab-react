import React, { useContext, useState } from "react";
import HeroImage from "../../components/heroImage/heroImage";
import * as ReactBootStrap from 'react-bootstrap'
import DiscoveryFilterList from "./discoverySearchFilters/discoveryFilterList";
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
	const [checked, setChecked] = useState(initialiseCheckedState())
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

	/**
	 * Query CalTech db and set exoplanetData in App state and store as session var
	 * @return {Promise<void>}
	 */
	const queryExoplanetDatabase = async () => {
		await getExoplanets().then(res => {
			if (res.status === 200) {
				context.setExoplanetData(res.data);
				sessionStorage.setItem('exoplanetSearchResults', JSON.stringify(res.data));
			} else {
				console.log("error retrieving exoplanetData");
			}
		}).catch(e => {
			console.log(e);
		});
	};

	console.log(checked)
	console.log(context.exoplanetData)

	return (
		<>
			<HeroImage/>
			<div id={'discovery-title'}>Current Discoveries</div>
			<div id={"database-search-wrapper"}>
				<div id="discovery-table">
					<ReactBootStrap.Table striped bordered hover size="sm">
						<thead>

						<UnderConstruction/>

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
					<DiscoveryFilterList
						filterArray={identificationFiltersArray}
						title={"Identifications"}
						checked={checked}
						setChecked={setChecked}
					/>
					<DiscoveryFilterList
						filterArray={exoplanetArchiveFiltersArray}
						title={"Exoplanets"}
						checked={checked}
						setChecked={setChecked}
					/>
					<DiscoveryFilterList
						filterArray={projectDispositionFiltersArray}
						title={"Dispositions"}
						checked={checked}
						setChecked={setChecked}
					/>
					<DiscoveryFilterList
						filterArray={transitPropertiesFiltersArray}
						title={"Transit Properties"}
						checked={checked}
						setChecked={setChecked}
					/>
					<DiscoveryFilterList
						filterArray={thresholdCrossingEventFiltersArray}
						title={"Threshold Crossing Events"}
						checked={checked}
						setChecked={setChecked}
					/>
					<DiscoveryFilterList
						filterArray={stellarParametersFiltersArray}
						title={"Stellar Parameters"}
						checked={checked}
						setChecked={setChecked}
					/>
					<DiscoveryFilterList
						filterArray={kicParametersFiltersArray}
						title={"KIC Parameters"}
						checked={checked}
						setChecked={setChecked}
					/>
					<DiscoveryFilterList
						filterArray={pixelBasedKoiVettingFiltersArray}
						title={"Pixel Based KOI Vetting"}
						checked={checked}
						setChecked={setChecked}
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
