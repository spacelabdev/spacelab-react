import React from "react";
import Planets_Circle from "../../assets/aboutAssets/planet_circle.png";
import { aboutHistoryArray } from "./aboutHelper";
import Dot from "../../assets/aboutAssets/dot.svg";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function AboutHistorySection() {
	return (
		<section id="about-history-section">
			<h2 className="about-history-header">History</h2>
			<div className="history-container">
				<div id={"planet-image-container"}>
					<img
						className={"about-history-image"}
						src={Planets_Circle}
						alt={"Space"}
					/>
				</div>
				<div className="history">
					{aboutHistoryArray.map((historyItem, i) => {
						return (
							<div className="about-history-wrapper" key={i}>
								<div className="history-dot">
									<img src={Dot} alt={"Space"} />
									<h3>{historyItem[0]}</h3>
								</div>
								<div className="about-history-content">
									<div className={"div-line"} />
									<p
										className={
											i === aboutHistoryArray.length - 1
												? `history-paragraph-normal`
												: `history-paragraph-last`
										}
									>
										{historyItem[1]}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
