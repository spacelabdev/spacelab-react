import { SPACELAB_TESTIMONIALS } from "./data";
import "./testimonialSection.scss";

const TestimonialSection = () => {
	return (
		<>
			<section id="testimonial-container">
				<div className="testimonial-form-content">
					<h4 className="donate-title">Make An Impact</h4>
					<p>
						To help us grow these opportunities, please consider
						making <br />a tax-deductible donation to SpaceLab
						today.
					</p>
					<button className="donate-button">Donate</button>
				</div>
				<div className="testimonial-testimonial-content">
					{SPACELAB_TESTIMONIALS.map(
						({ name, feedback, imagePath }) => {
							const image = require("../assets/" + imagePath);

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
									<p className="testimonial-feedback">
										{feedback}
									</p>
									<p className="testimonial-name">{name}</p>
								</div>
							);
						}
					)}
				</div>
			</section>
		</>
	);
};

export default TestimonialSection;
