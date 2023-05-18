import { SPACELAB_ORG_INDENTITY } from "../constant";
import "./aboutOrgIdentitySection.scss";

const AboutOrgIdentitySection = () => {
	return (
		<section id="about-org-identity-container">
			{SPACELAB_ORG_INDENTITY.map(({ title, description }) => (
				<div className="card-section" key={title}>
					<h4 className="about-org-identity-header">{title}</h4>
					<div className="about-mission-content">
						<p>{description}</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default AboutOrgIdentitySection;
