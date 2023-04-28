import React from "react";
import "./contactUsSection.scss";
import InternalNavButton from "../../../../components/styleComponents/navigationButtons/internalNavButton";
import ContactUsImage from "../../../../assets/homeAssets/image5.png";

export default function ContactUsSection() {
	return (
		<section id="contact-us-section">
			<div className="image-wrap">
				<img
					src={ContactUsImage}
					alt="Three hooded figures staring up at the starry sky"
					className="contact-us-img"
				/>
			</div>
			<div className="text-content">
				<h2>Want to be a part of the team?</h2>
				<p>
					Are you fascinated by the mysteries of outer space? Do you
					dream of being a part of the exploration and discovery of
					our universe? If so, we invite you to join our organization
					as a volunteer! As a volunteer, you will have the
					opportunity to contribute to groundbreaking projects,
					participate in educational programs, and engage with the
					public about the wonders of outer space. You'll work
					alongside some of the brightest minds in the field, and gain
					valuable skills and experience that will serve you well in
					any future endeavor.
				</p>
				<div className="button-wrap">
					<InternalNavButton
						path="/contact"
						buttonText="Contact Us"
					></InternalNavButton>
				</div>
			</div>
		</section>
	);
}
