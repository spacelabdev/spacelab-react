import React from "react";
import planet from "../../assets/planet.svg";
import "./home.scss";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function HorizonSection() {
	return (
		<section className="horizon-section">
			<div className="horizon-content-container">
				<div className="horizon-left-container">
					<div>
						Whats on the horizon
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
				<div className="horizon-right-container">
					<div>EXOPLANETARIUM</div>
					<img src={planet} alt="planet" />
				</div>
			</div>
		</section>
	);
}