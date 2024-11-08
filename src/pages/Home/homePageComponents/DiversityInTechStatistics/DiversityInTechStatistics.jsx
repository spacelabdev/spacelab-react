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
						<p className="text">Women in Tech</p>
					</div>
					<div className="stat-card">
						<p className="percentage ">35%</p>
						<p className="text">People of Color in Tech</p>
					</div>
					<div className="stat-card">
						<p className="percentage ">12%</p>
						<p className="text">
							General Unemployment Rate for Those with
							Disabilities
						</p>
					</div>
				</div>
				<h3>VS.</h3>
				<div className="stats-column spacelab">
					<h3>SpaceLab</h3>
					<div className="stat-card">
						<p className="percentage ">65%</p>
						<p className="text">
							Women/Non-Binary Members at SpaceLab
						</p>
					</div>
					<div className="stat-card">
						<p className="percentage ">60%</p>
						<p className="text">People of Color at SpaceLab</p>
					</div>
					<div className="stat-card">
						<p className="percentage ">17%</p>
						<p className="text">
							People Who Identify with Having a Disability at
							SpaceLab
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
