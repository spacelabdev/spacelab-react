import "./Internships.scss";
import contentCreationImage from "../assets/internships-content-creation.png";
import dataScienceImage from "../assets/internships-data-science.png";
import marketingImage from "../assets/internships-marketing.png";
import softwareEngineeringImage from "../assets/internships-software-engineering.png";
import uxDesignImage from "../assets/internships-ux-design.png";

export default function Internships() {
	return (
		<section className="participate-section internships">
			<h2>Our Internships</h2>
			<div className="internships-container">
				<div className="internship-element">
					<img
						src={dataScienceImage}
						alt="Data Science Internships"
					/>
					<p>Data Science</p>
				</div>
				<div className="internship-element">
					<img src={uxDesignImage} alt="UX/UI Design Internships" />
					<p>UX/UI Design</p>
				</div>
				<div className="internship-element">
					<img src={marketingImage} alt="Marketing Internships" />
					<p>Marketing</p>
				</div>
				<div className="internship-element">
					<img
						src={softwareEngineeringImage}
						alt="Software Engineering Internships"
					/>
					<p>Software Engineering</p>
				</div>
				<div className="internship-element">
					<img
						src={contentCreationImage}
						alt="Content Creation Internships"
					/>
					<p>Content Creation</p>
				</div>
			</div>
			<h3>+ and more!</h3>
		</section>
	);
}
