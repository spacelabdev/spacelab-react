import React from "react";
import HeroImage from "../../assets/HeroImage.png";
import { Link } from "react-router-dom";
import "./heroV2.scss";

export default function HeroV2() {
	return (
		<section
			className="participate-heroV2"
			style={{ backgroundImage: `url(${HeroImage})` }}
		>
			<div>
				<h2 className="heading">Join us at SpaceLab!</h2>
			</div>

			<div>
				<p className="header-text">
					Outerspace tech projects to excel your career
				</p>
			</div>

			<button>
				<Link to={"/campaigns/participate/apply"}>Apply Now</Link>
			</button>
		</section>
	);
}
