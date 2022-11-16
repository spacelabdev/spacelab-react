import React from "react";
import './solarSystem.scss';
import SolarSystem from "../../assets/componentAssets/SolarSystem.svg";

export default function SolarSystemImage() {
	return (
		<>
			<div id={'solar-system-image-wrapper'}>
				<img className={"solar-system-image"} src={SolarSystem} alt={"Solar System"}/>
			</div>
		</>
	);
};