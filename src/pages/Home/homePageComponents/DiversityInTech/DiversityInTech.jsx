import React from "react";
import image1 from "../../../../assets/homeAssets/image1.jpg";
import image2 from "../../../../assets/homeAssets/image2.jpg";
import image3 from "../../../../assets/homeAssets/image3.jpg";
import InternalNavButton from "../../../../components/styleComponents/navigationButtons/InternalNavButton";
import "./diversityInTech.scss";

/**
 * Renders Introduction section
 * @returns {JSX.Element}
 * @constructor
 */
export default function DiversityInTechSection() {
	return (
		<section className="diversity-in-tech-section">
			<div className="content-container">
				<div className="images-container">
					<img
						src={image1}
						alt="A group of engineers gatered around a laptop"
					/>
					<img
						src={image2}
						alt="A person putting post-it notes on a wall"
					/>
					<img
						src={image3}
						alt="A group of team members sitting at a table with their computers"
					/>
				</div>
				<div className="about">
					<p>
						SpaceLab is a people-incubator focusing on outer-space
						tech initiatives. We support and help underrepresented
						communities gain experience with real-world projects to
						help diversify the tech space!
					</p>
					<div className="button-wrap">
						<InternalNavButton
							path="/about"
							buttonText="About Us"
						></InternalNavButton>
					</div>
				</div>
			</div>
		</section>
	);
}
