import React from "react";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import PartyPopper from "../../../assets/contactAssets/emojione_party-popper.png";
import "./contactForm.scss";

/**
 * Renders Contact form. If state.succeeded is true, renders a thanks for your submission message instead.
 * @returns {JSX.Element} Contact form
 * @constructor
 */
export default function ContactForm() {
	const [state, handleSubmit] = useForm("xlekpyzd");
	if (state.succeeded) {
		return (
			<div className={"submit-form-container"}>
				<h2>Thank You!</h2>
				<img
					className={"party_popper-image"}
					src={PartyPopper}
					alt={"Hooray!"}
				/>
				<p>
					Your submission has been received! We'll be in touch with
					you shortly.
				</p>
				<div className={"contact-button-container"}>
					<button className="submit-button-back_home">
						<Link to="/">Home Page</Link>
					</button>
				</div>
			</div>
		);
	}

	return (
		<div id={"contact-form-container"}>
			<div className="contact-form-wrapper">
				<div className={"contact-form-field-container"}>
					<h2>Contact Us</h2>
					<form method={"POST"} onSubmit={handleSubmit}>
						<div className="first-input-row">
							<input
								className="small-input"
								id="firstName"
								name="firstName"
								placeholder="FIRST NAME"
								type="firstName"
								required
							/>
							<ValidationError
								prefix="FirstName"
								field="firstName"
								errors={state.errors}
							/>
							<input
								className="small-input"
								id="lastName"
								placeholder="LAST NAME"
								name="lastName"
								type="lastName"
								required
							/>
							<ValidationError
								prefix="LastName"
								field="lastName"
								errors={state.errors}
							/>
						</div>
						<div>
							<input
								id="email"
								placeholder="EMAIL"
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
						<div>
							<input
								id="phone"
								placeholder="PHONE"
								name="phone"
								type="phone"
							/>
							<ValidationError
								prefix="Phone"
								field="phone"
								errors={state.errors}
							/>
						</div>
						<div className="contact-form-field">
							<div>
								<textarea
									className="message-input"
									id="message"
									placeholder="MESSAGE"
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
							<button
								className="submit-button"
								type="submit"
								disabled={state.submitting}
							>
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
