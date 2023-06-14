import React from "react";
import "./UnderConstruction.scss";
import Construction from "../../assets/componentAssets/UnderConstruction.svg";

export default function UnderConstruction() {
	return (
		<>
			<div id={"under-construction-image-wrapper"}>
				<img
					className={"under-construction-image"}
					src={Construction}
					alt={"Rocket Under Construction"}
				/>
			</div>
		</>
	);
}
