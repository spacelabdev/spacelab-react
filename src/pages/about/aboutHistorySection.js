import React from 'react';
import Planets_Circle from '../../assets/aboutAssets/planet_circle.png'
import {aboutHistoryArray} from "./aboutHelper";
import Dot from "../../assets/aboutAssets/dot.svg";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function AboutHistorySection() {
	const historyItems = [];

	for (let i = 0; i < aboutHistoryArray.length; i++) {
		let isLast = 'normal';
		if (i === aboutHistoryArray.length - 1) {
			isLast = 'last';
		}

		historyItems.push(
			<div className="about-history-wrapper">
				<div className="history-dot">
					<img src={Dot} alt={"Space"}/>
					<h3>{aboutHistoryArray[i][0]}</h3>
				</div>
				<div className="about-history-content">
					<div className={'div-line'}/>
					<p className={`history-paragraph-${isLast}`}>
						{aboutHistoryArray[i][1]}
					</p>
				</div>
			</div>
		);
	}

	return (
		<section className="history-section">
			<h2 className="about-history-header">History</h2>
			<div className="history-container">
				<div id={"planet-image-container"}>
					<img className={"about-history-image"} src={Planets_Circle} alt={"Space"}/>
				</div>
				<div className="history">
					{historyItems}
				</div>
			</div>
		</section>
	);
}