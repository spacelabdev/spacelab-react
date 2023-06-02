import React from "react";
import GroupImage from "../../assets/group_image.png";
import UpArrow from "../../assets/up_arrow_image.png";
import "./companyProgress.scss";

const CompanyProgressSection = () => {
	return (
		<section id="progress-container">
			<h4 className="donate-title">SpaceLab vs Tech Industry Average</h4>
			<div className="progress-image-wrapper">
				<img
					src={GroupImage}
					alt={
						"Women non binary,People of color and people with disability"
					}
					className="progress-image"
				/>
				<div className="progress-card people-of-color">
					<p className="progress-percentage-container">
						<span className="progress-percentage">25%&nbsp;</span>
						<div className="arrow-container">
							<img
								src={UpArrow}
								alt={"shows the percentage difference"}
								className="percentage-up-arrow"
							/>
							<span>more</span>
						</div>
					</p>
					<p>People of color</p>
				</div>
				<div className="progress-card women-non-binary">
					<p className="progress-percentage-container">
						<span className="progress-percentage">39%&nbsp;</span>
						<div className="arrow-container">
							<img
								src={UpArrow}
								alt={"shows the percentage difference"}
								className="percentage-up-arrow"
							/>
							<span>more</span>
						</div>
					</p>
					<p>Women/non-binary</p>
				</div>
				<div className="progress-card people-disablity">
					<p className="progress-percentage-container">
						<span className="progress-percentage">5%&nbsp;</span>
						<div className="arrow-container">
							<img
								src={UpArrow}
								alt={"shows the percentage difference"}
								className="percentage-up-arrow"
							/>
							<span>more</span>
						</div>
					</p>
					<p>
						People who identify
						<br /> as having a disability
					</p>
				</div>
			</div>
		</section>
	);
};

export default CompanyProgressSection;
