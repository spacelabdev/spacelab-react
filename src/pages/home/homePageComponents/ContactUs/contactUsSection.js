import React from "react";
import "./contactUsSection.scss";
import InternalNavButton from "../../../../components/styleComponents/navigationButtons/internalNavButton";

export default function ContactUsSection() {
	return (
		<section>
			<h2>Want to be a part of the team?</h2>
			<p>
				As diversity fuels creativity and innovation, we here at
				SpaceLab strongly value the voices and perspectives of those
				underrepresented in the community. One of our goals is to create
				paid fellowships, internships, scholarship opportunities, and
				debt relief for those who are underrepresented, including but
				not limited to women, members of the LGBTQ+ community, and
				people of color. Helping members of the community who struggle
				economically will provide them with the liberty and flexibility
				necessary to explore new career paths in science and technology.
				To help us grow these opportunities, please consider making a
				tax-deductible donation to SpaceLab today.
			</p>
			<div className="button-wrap">
				<InternalNavButton
					path="/contact"
					buttonText="Contact Us"
				></InternalNavButton>
			</div>
		</section>
	);
}
