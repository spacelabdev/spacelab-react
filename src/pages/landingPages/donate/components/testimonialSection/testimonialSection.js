import { Link } from "react-router-dom";
import { SPACELAB_TESTIMONIALS } from "./data";
import "./testimonialSection.scss";

const TestimonialSection = () => {
	return (
		<>
			<section id="testimonial-container">
				<div className="testimonial-content">
					<div className="testimonial-form-content">
						<h4 className="donate-title">Make An Impact</h4>
						<p className="custom-text--large font-semibold">
							To help us grow these opportunities, please consider
							making <br />a tax-deductible donation to SpaceLab
							today.
						</p>
						<Link
							to={"/campaigns/donate/donate-payment"}
							style={{ textDecoration: "none" }}
						>
							<button
								className="donate-button"
								component={Link}
								to={"/campaigns/donate/donate-payment"}
							>
								Donate
							</button>
						</Link>{" "}
					</div>
					<div className="testimonial-data">
						{SPACELAB_TESTIMONIALS.map(
							({ name, feedback, imagePath }) => {
								const image = require("../../assets/" +
									imagePath);

								return (
									<div
										className="testimonial-card"
										key={`${name + name.length}`}
									>
										<img
											src={image}
											alt={`${name}.png`}
											className="testimonial-image"
											loading="lazy"
										/>
										<p className="feedback-text testimonial-feedback">
											{feedback}
										</p>
										<p className="feedback-text testimonial-name">
											{name}
										</p>
									</div>
								);
							}
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default TestimonialSection;
