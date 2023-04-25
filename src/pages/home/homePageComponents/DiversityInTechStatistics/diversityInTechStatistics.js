import React from "react";
import "./diversityInTechStatistics.scss";
import earthImage from "../../../../assets/homeAssets/image4.jpg";

export default function DiversityInTechStatistics() {
	return (
		<section
			style={{
				backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), #1c1a22), url(${earthImage})`,
			}}
			className="diversity-in-tech-stats-section"
		>
			<h2>Diversity in Tech: Statistics</h2>
			<div className="stats-wrapper">
				<div className="stats-column them">
					<h3>Them</h3>
					<div className="stat-card">
						<p className="percentage ">26%</p>
						<p className="text">Percentage of Women in Tech</p>
					</div>
					<div className="stat-card">
						<p className="percentage ">35%</p>
						<p className="text">
							Percentage of People of Color in Tech
						</p>
					</div>
					<div className="stat-card">
						<p className="percentage ">6%</p>
						<p className="text">
							Percentage of People with Disabilities in Tech
						</p>
					</div>
				</div>
				<div className="stats-column spacelab">
					<h3>SpaceLab</h3>
					<div className="stat-card">
						<p className="percentage ">60%</p>
						<p className="text">Percentage of Women at SpaceLab</p>
					</div>
					<div className="stat-card">
						<p className="percentage ">50%</p>
						<p className="text">
							Percentage of People of Color at SpaceLab
						</p>
					</div>
					<div className="stat-card">
						<p className="percentage ">30%</p>
						<p className="text">
							Percentage of People with Disabilities at SpaceLab
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
