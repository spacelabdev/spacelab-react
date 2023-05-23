import React from "react";
import DONATE_IMAGE from "../assets/donate_title_section_image.png";
import ROCKET_ICON_IMAGE from "../assets/icon _rocket.png";
import "./titleSection.scss";

const TitleSection = () => {
	return (
		<>
			<section id="title-container">
				<div className="title-content">
					<div className="title-section-form">
						<h2 className="form-title">
							DONATE TO SUPPORT <br />
							DIVERSITY IN TECH
						</h2>
						<h4 className="form-sub-title">
							With your support, we can create equal opportunities
							<br />
							for underrepresented groups through paid programs
							<br />
							and financial assistance.
						</h4>
						<button className="donate-button">Donate</button>
					</div>
					<div className="title-image-container">
						<img
							src={DONATE_IMAGE}
							alt={
								"Women of color and non-binary, talking to each other in a group"
							}
							className="women-of-color"
						/>
					</div>
				</div>
				<div className="icon-container">
					<img
						src={ROCKET_ICON_IMAGE}
						alt={"rocket ship icon"}
						className="rocket-ship-icon"
					/>
				</div>
			</section>
		</>
	);
};

export default TitleSection;
