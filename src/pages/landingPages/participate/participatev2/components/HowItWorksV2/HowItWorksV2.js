import React from "react";
import "./HowItWorksV2.scss";
import Vector from "../../assets/Vector.png";
import TeamIcon from "../../assets/ri_team-line.png";
import ExperienceIcon from "../../assets/bx_world.png";
import CollaborateIcon from "../../assets/Collaborate.png";

export default function HowItWorksV2() {
	return (
		<section className="participate-section p-how-it-worksV2">
			<div className="how-it-works-container">
				<div className="how-it-works-element">
					<img
						src={Vector}
						alt="vector background"
						className="vector"
					/>
					<img src={TeamIcon} alt="icon of teams" className="icon" />

					<h3>Work in Teams</h3>
					<p>
						Collaborate, exchange expertise, and achieve success
						with a diverse team passionate about outer-space tech.
					</p>
				</div>

				<div className="how-it-works-element">
					<img
						src={Vector}
						alt="vector background"
						className="vector"
					/>
					<img
						src={CollaborateIcon}
						alt="icon of two people collaborating"
						className="icon"
					/>

					<h3>Cross Collaborate</h3>
					<p>
						Innovate, expand skills, and solve outer-space
						challenges through collaboration with diverse
						backgrounds and expertise.
					</p>
				</div>

				<div className="how-it-works-element">
					<img
						src={Vector}
						alt="vector background"
						className="vector"
					/>
					<img
						src={ExperienceIcon}
						alt="world icon"
						className="icon"
					/>

					<h3>Real World Experience</h3>
					<p>
						Get hands-on, make an impact, and build your career
						foundation with real-world outer-space technology
						projects and expert mentorship.
					</p>
				</div>
			</div>
		</section>
	);
}
