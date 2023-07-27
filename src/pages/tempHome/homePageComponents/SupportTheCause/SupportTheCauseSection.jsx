import React from "react";
import "./supportTheCause.scss";
import ExternalNavButton from "../../../../components/styleComponents/navigationButtons/ExternalNavButton";
import InternalNavButton from "../../../../components/styleComponents/navigationButtons/InternalNavButton"

/**
 * Renders Support the Cause section
 * @returns {JSX.Element}
 * @constructor
 */
export default function SupportTheCauseSection() {
	return (
		<div id={"support-the-cause-section"}>
			<div className={"support-the-cause-wrap"}>
				<h2 className={"support-the-cause-header"}>
					Support The Cause
				</h2>
				<p>
					As diversity fuels creativity and innovation, we here at
					SpaceLab strongly value the voices and perspectives of those
					underrepresented in the community.
				</p>
				<p>
					One of our goals is to create paid fellowships, internships,
					scholarship opportunities, and debt relief for those who are
					underrepresented, including but not limited to women,
					members of the LGBTQ+ community, and people of color.
					Helping members of the community who struggle economically
					will provide them with the liberty and flexibility necessary
					to explore new career paths in science and technology.{" "}
				</p>
				<p>
					To help us grow these opportunities, please consider making
					a tax-deductible donation to SpaceLab today.
				</p>
				<div id={"donate-button-container"}>
				<InternalNavButton
					path="/donate"
					buttonText="Donate"
				></InternalNavButton>
				</div>
			</div>
		</div>
	);
}
