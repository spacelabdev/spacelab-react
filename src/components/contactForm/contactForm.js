import React from "react";
import useForm from "./useForm";
import "./contactForm.scss"

/**
 * Creates Contact form
 * @returns {JSX.Element} Contact form
 * @constructor
 */
export default function ContactForm() {
	const {formData, handleChange} = useForm({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: '',
	});

	const handleSubmit = event => {
		event.preventDefault()
		window.alert(`Submitting ${JSON.stringify(formData, null, 2)}`)
	};

	return (
		<section id={"contact-form-container"}>
			<div className="contact-form-wrapper">
				<div className="contact-form-title">
					<p id="title-text">Contact us</p>
				</div>
				<div>
					<form onSubmit={handleSubmit}>
						<div className="first-input-row">
							<div className="contact-form-field">
								<label className="contact-form-label">First Name*</label>
								<div>
									<input
										className="small-input"
										name="firstName"
										value={formData.firstName}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="contact-form-field">
								<label className="contact-form-label">Last Name*</label>
								<div>
									<input
										className="small-input"
										name="lastName"
										value={formData.lastName}
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>
						<div className="contact-form-field">
							<label className="contact-form-label">Email*</label>
							<div>
								<input
									className="large-input"
									name="email"
									value={formData.email}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="contact-form-field">
							<label className="contact-form-label">Phone</label>
							<div>
								<input
									className="large-input"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="contact-form-field">
							<label className="contact-form-label">Message</label>
							<div>
                  <textarea
	                  className="message-input"
	                  name="message"
	                  value={formData.message}
	                  onChange={handleChange}
                  />
							</div>
						</div>
						<div className={"contact-button-container"}>
							<button className="submit-button" type="submit">
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};