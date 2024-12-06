import React from "react";
import "./diversityInTechStatistics.scss";
import earthImage from "../../../../assets/homeAssets/image4.jpg";

export default function DiversityInTechStatistics() {
	return (
		<section className="diversity-in-tech-stats-section">
			<h2>DIVERSITY DONE RIGHT</h2>
			<div className="stats-wrapper">
				
				<div className="stats-column spacelab">
					<h3>The Spacelab Nonprofit</h3>
					<div className="stat-card">
						<p className="percentage ">65%</p>
						<p className="text">
							Women/Non-Binary Members
						</p>
					</div>
					<div className="stat-card">
						<p className="percentage ">60%</p>
						<p className="text">Identify as People of Color</p>
					</div>
					<div className="stat-card">
						<p className="percentage ">17%</p>
						<p className="text">
							Identify with Having a Disability
						</p>
					</div>
				</div>

				<div className="stats-column them">
					<h3>Other Tech Companies</h3>
					<div className="stat-card">
						<p className="percentage ">26%</p>
						<p className="text">Women in Tech</p>
					</div>
					<div className="stat-card">
						<p className="percentage ">35%</p>
						<p className="text">Identify as People of Color</p>
					</div>
					<div className="stat-card">
						<p className="percentage ">12%</p>
						<p className="text">
							Disability Unemployment Rate
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
