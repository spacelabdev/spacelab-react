import React from "react";
import "./supportTheCause.scss";
import InternalNavButton from "../../../../components/styleComponents/navigationButtons/InternalNavButton";

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
					SUPPORT THE CAUSE
				</h2>
				<p>
					At Spacelab, we believe that diversity drives innovation and creativity, which is
					why we value the voices and perspectives of those underrepresented in the community.
				</p>
				<p>
					Our goal is to create paid fellowships, internships,
					scholarship opportunities, and provide debt relief to these
					underrepresented groups – including women,
					members of the <span title="lesbian, gay, bisexual, transgender, queer or questioning, intersex, and asexual">LGBTQ+</span> community, and people of color.
					Giving these groups financial support will afford them the opportunity
					to explore new career paths in science and technology.
				</p>
				<p>
					Help us achieve this goal by making a donation today!
				</p>
				<div id={"donate-button-container"}>
					<InternalNavButton
						path="/donate"
						buttonText="Donate Now"
					></InternalNavButton>
				</div>
			</div>
		</div>
	);
}