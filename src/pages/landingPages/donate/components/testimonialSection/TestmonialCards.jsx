const TestimonialCard = ({ name, feedback, image }) => {
	return (
		<div className="testimonial-card">
			<img
				src={image}
				alt={`${name}.png`}
				className="testimonial-image"
				loading="lazy"
			/>
			<p className="feedback-text testimonial-feedback">{feedback}</p>
			<p className="feedback-text testimonial-name">{name}</p>
		</div>
	);
};

export default TestimonialCard;
