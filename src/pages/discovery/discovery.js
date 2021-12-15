import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import DiscoveryFilterList from "./discoverySearchFilters/discoveryFilterList";
import {discoveryMethodFiltersArray, planetSystemsFiltersArray, planetTypeFiltersArray} from "./discoveryHelper";
import "./discovery.scss";
import Footer from "../../components/footer/footer";
import UnderConstruction from "../../components/underConstructionNotification/underConstruction";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Discovery() {

	return (
		<>
			<HeroImage/>
			<div id={'discovery-title'}>Current Discoveries</div>
			<div id={"database-search-wrapper"}>
				<div id="discovery-table">

					<UnderConstruction/>

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
				</div>
			</div>
			<Footer/>
		</>
	);
};
