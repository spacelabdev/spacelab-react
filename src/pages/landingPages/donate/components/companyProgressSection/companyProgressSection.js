import React from "react";
import GroupImage from "../../assets/group_image.png";
import UpArrow from "../../assets/up_arrow_image.png";
import PROGRESS_DATA from "./data";
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
					loading="lazy"
				/>
				{PROGRESS_DATA.map((item) => (
					<div
						className={`progress-card progress-card-${item.id}`}
						key={item.id}
					>
						<div className="progress-percentage-container">
							<span className="progress-percentage custom-text--largest">
								{item.percentage}%&nbsp;
							</span>
							<div className="arrow-container">
								<img
									src={UpArrow}
									alt={"shows the percentage difference"}
									className="percentage-up-arrow"
								/>
								<span className="custom-text--larger">
									more
								</span>
							</div>
						</div>
						<p className="custom-text--large">{item.title}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default CompanyProgressSection;
