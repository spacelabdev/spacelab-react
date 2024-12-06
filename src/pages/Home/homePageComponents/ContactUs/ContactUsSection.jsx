import React from "react";
import "./contactUsSection.scss";
import InternalNavButton from "../../../../components/styleComponents/navigationButtons/InternalNavButton";
import ContactUsImage from "../../../../assets/homeAssets/image5.png";

export default function ContactUsSection() {
	return (
		<section id="contact-us-section">
			{/*
			<div className="image-wrap">
				<img
					src={ContactUsImage}
					alt="Three hooded figures staring up at the starry sky"
					className="contact-us-img"
				/>
			</div>
			*/}

			
			<div className="text-content">
				<h2>WANT TO JOIN THE TEAM?</h2>
				<p>
					If you are fascinated by space and want to be part of the exploration of our
					universe, we invite you to join our organization as a volunteer!
				</p>
				<p>
					As a volunteer, you will have the opportunity to contribute to groundbreaking
					projects, participate in educational programs, and engage with the public about
					the wonders of outer-space. Collaborate with some of the brightest minds in the
					field, gain valuable skills, and build experiences that will bring you to new
					heights.
				</p>
				<p>
					The universe awaits! 🚀
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
