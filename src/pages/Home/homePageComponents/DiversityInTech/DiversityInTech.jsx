import React from "react";
// import image1 from "../../../../assets/homeAssets/image1.jpg";
// import image2 from "../../../../assets/homeAssets/image2.jpg";
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
				
				<div className="about">
					<h3>About</h3>
					<p>
						Spacelab is a program dedicated to outer-space tech initiatives while 
						promoting diversity in the tech space! We empower underrepresented communities
						by providing them with hands-on experience in real-world projects. Through our program,
						these tech enthusiasts become equipped with the skills and opportunities needed
						to thrive in the tech industry.
					</p>
					<div className="button-wrap">
						<InternalNavButton
							path="/about"
							buttonText="Learn More"
						></InternalNavButton>
					</div>
				</div>
				
					<img
						src={image3}
						alt="A group of team members sitting at a table with their computers"
					/>

			</div>
		</section>
	);
}
