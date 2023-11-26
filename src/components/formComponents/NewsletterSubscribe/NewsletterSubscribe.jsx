import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import PartyPopper from "../../../assets/contactAssets/emojione_party-popper.png";
import "./newsletterSubscribe.scss";

/**
 * Renders Chip components
 * Receives tag prop which includes the tag string
 * @param tag string
 * @returns {JSX.Element}
 * @constructor
 */

export default function NewsletterSubscribe({ justifyContent = "left" }) {
	const [state, handleSubmit] = useForm("xoqzkgve");
	if (state.succeeded) {
		return (
			<div className={"submit-form-container"}>
				<h4>Thank You!</h4>
				<img
					src={PartyPopper}
					alt={"Hooray!"}
					width={"20%"}
					height={"20%"}
				/>
				<p>
					Your submission has been received! We'll be in touch with
					you shortly.
				</p>
			</div>
		);
	}

	return (
		<div className="newsletter-subscribe">
			<div className="inner-wrap">
				<h4>Subscribe to Our Newsletter</h4>
				<p>
					Sign up to learn about the latest discoveries, news and
					more! Delivered weekly.
				</p>
				<form className="subscription-form" onSubmit={handleSubmit}>
					<div
						className={
							justifyContent === "center"
								? `inner-wrap-center`
								: "inner-wrap-left"
						}
					>
						<div
							className={
								justifyContent === "center"
									? `name-wrap-center`
									: "name-wrap-left"
							}
						>
							<input
								type="firstName"
								id="firstName"
								placeholder="FIRST NAME"
								name="firstName"
								required
							/>
							<input
								type="lastName"
								id="lastName"
								placeholder="LAST NAME"
								name="lastName"
								required
							/>
						</div>
						<input
							type="email"
							id="email"
							placeholder="EMAIL"
							name="email"
							required
						/>
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
						<button
							className="newsletter-subscribe-button"
							type="submit"
							disabled={state.submitting}
						>
							Subscribe
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
