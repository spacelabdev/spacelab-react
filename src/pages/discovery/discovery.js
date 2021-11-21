import React, { useContext } from "react";
import HeroImage from "../../components/heroImage/heroImage";
import * as ReactBootStrap from 'react-bootstrap'
import DiscoveryFilterList from "./discoverySearchFilters/discoveryFilterList";
import {discoveryMethodFiltersArray, planetSystemsFiltersArray, planetTypeFiltersArray} from "./discoveryHelper";
import "./discovery.scss";
import Footer from "../../components/footer/footer";
import UnderConstruction from "../../components/underConstructionNotification/underConstruction";
import { getExoplanets } from "../../services/calTechApiRequest";
import { UniversalContext } from "../../App";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Discovery() {
	const context = useContext(UniversalContext);
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
	 * Query exo-planet db and set exoplanetData in App state
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

	// const [isChecked, setIsChecked] = useState(
	// 	new Array (filters.length).fill(false)
	// );
	//
	// const handleOnChange = () =>{
	// 	setIsChecked(!isChecked)
	// };

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
					<DiscoveryFilterList filterArray={planetSystemsFiltersArray} title={"Planet Systems"}/>
					<DiscoveryFilterList filterArray={planetTypeFiltersArray} title={"Planet Type"}/>
					<DiscoveryFilterList filterArray={discoveryMethodFiltersArray} title={"Discovery Method"}/>
					{/* todo: button styling */}
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
