import React from "react";
import './underConstruction.scss';
import Construction from "../../assets/UnderConstruction.svg";

export default function UnderConstruction() {
	return (
		<>
			<div id={'under-construction-image-wrapper'}>
				<img className={"under-construction-image"} src={Construction} alt={"Rocket Under Construction"}/>
			</div>
		</>
	);
};