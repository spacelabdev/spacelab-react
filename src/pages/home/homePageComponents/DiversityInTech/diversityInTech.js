import React from "react";
import image1 from "../../../../assets/homeAssets/image1.jpg";
import image2 from "../../../../assets/homeAssets/image2.jpg";
import image3 from "../../../../assets/homeAssets/image3.jpg";
import InternalNavButton from "../../../../components/styleComponents/navigationButtons/internalNavButton";
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
						alt="A person in a jean shirt sitting behind a computer"
					/>
					<img
						src={image3}
						alt="A group of team members putting post-it notes on a wall"
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
