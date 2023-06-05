import { SPACELAB_ORG_INDENTITY } from "./data";
import CompanyProgressSection from "../companyProgressSection/companyProgressSection";
import "./aboutOrgIdentitySection.scss";

const AboutOrgIdentitySection = () => {
	return (
		<section id="about-org-identity-container">
			<div className="about-org-content">
				{SPACELAB_ORG_INDENTITY.map(({ title, description }) => (
					<div className="card-section" key={title}>
						<h4 className="donate-title">{title}</h4>
						<div className="about-mission-content">
							<p>{description}</p>
						</div>
					</div>
				))}
			</div>
			<CompanyProgressSection />
		</section>
	);
};

export default AboutOrgIdentitySection;
