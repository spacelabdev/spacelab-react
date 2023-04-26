import React from "react";
import "./contactUsSection.css";
import InternalNavButton from "../../../../components/styleComponents/navigationButtons/internalNavButton";

export default function ContactUsSection() {
	return (
		<section>
			<h2>Want to be a part of the team?</h2>
			<div className="button-wrap">
				<InternalNavButton
					path="/contact"
					buttonText="Contact Us"
				></InternalNavButton>
			</div>
		</section>
	);
}
