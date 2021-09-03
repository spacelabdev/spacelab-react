import React from "react";
import { useForm, ValidationError } from '@formspree/react'
import "./contactForm.scss"

/**
 * Creates Contact form
 * @returns {JSX.Element} Contact form
 * @constructor
 */
export default function ContactForm() {

  const [state, handleSubmit] = useForm("mrgrrlkv")
  if (state.succeeded) {
    return <p>Thank you for getting in touch!</p>
  } 

	return (
		<section id={"contact-form-container"}>
			<div className="contact-form-wrapper">
				<div className="contact-form-title">
					<p id="title-text">Contact us</p>
				</div>
				<div id={"contact-form-field-container"}>
					<form onSubmit={handleSubmit}>
						<div className="first-input-row">
							<div className="contact-form-field">
								<label className="contact-form-label">First Name*</label>
								<div>
									<input
										className="small-input"
                    id="firstName"
										name="firstName"
                    type="firstName"
                    required
									/>
                  <ValidationError 
                    prefix="FirstName" 
                    field="firstName"
                    errors={state.errors}
                  />
								</div>
							</div>
							<div className="contact-form-field">
								<label className="contact-form-label">Last Name*</label>
								<div>
									<input
										className="small-input"
                    id="lastName"
										name="lastName"
                    type="lastName"
                    required
									/>
                  <ValidationError 
                    prefix="LastName" 
                    field="firstName"
                    errors={state.errors}
                  />
								</div>
							</div>
						</div>
						<div className="contact-form-field">
							<label className="contact-form-label">Email*</label>
							<div>
								<input
									className="large-input"
                  id="email"
									name="email"
                  type="email"
                  required
								/>
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
							</div>
						</div>
						<div className="contact-form-field">
							<label className="contact-form-label">Phone</label>
							<div>
								<input
									className="large-input"
                  id="phone"
									name="phone"
                  type="phone"
								/>
                <ValidationError 
                  prefix="Phone" 
                  field="phone"
                  errors={state.errors}
                />
							</div>
						</div>
						<div className="contact-form-field">
							<label className="contact-form-label">Message*</label>
							<div>
                  <textarea
	                  className="message-input"
                    id="message"
	                  name="message"
                    type="message"
                    required
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
							</div>
						</div>
						<div className={"contact-button-container"}>
							<button className="submit-button" type="submit" disabled={state.submitting}>
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};