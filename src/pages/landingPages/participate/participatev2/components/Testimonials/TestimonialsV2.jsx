import React from "react";
import "./testimonialsV2.scss";
//import TestimonialsBg from "../../assets/testimonials-bg.png";
import angeliniesPhoto from "../../assets/alumni-angelinies.png";

export default function TestimonialsV2() {
	return (
		<section className="participate-section p-testimonials">
			<div className="testimonials-container">
				<img src={angeliniesPhoto} alt="" />

				<div className="testimonial-content blockquote-quoted">
					<p>
						Angelinies Yaport-Garcia, Senior Analyst Technical
						Writer @ Boomi
					</p>

					<p className="testimonials-text">
						SpaceLab opened so many doors for me
					</p>

					<p>
						Having this great opportunity on my resume helped in
						getting interviews and being able to talk about my work
						during those interviews.
					</p>
				</div>
			</div>
		</section>
	);
}
