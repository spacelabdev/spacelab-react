import React from "react";
import GroupImage from "../assets/group_image.png";
import "./companyProgress.scss";

const CompanyProgress = () => {
	return (
		<div className="progress-container">
			<h2>SpaceLab vs Tech Industry Average</h2>
			<div className="progress-image-wrapper">
				<img
					src={GroupImage}
					alt={
						"Women non binary,People of color and people with disability"
					}
					className="women-non-binary"
				/>
			</div>
			<div className="people-of-color">
				<p className="progress-percentage-container">
					<span className="progress-percentage">25%</span>
					<span> more</span>
				</p>
				<p>People of color</p>
			</div>
		</div>
	);
};

export default CompanyProgress;
