import React, { useState } from "react";

const ContactInfo = () => {
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		setEmail("");
		setPhoneNumber("");
	};

	return (
		<div className="form-sub-container">
			<p className="custom-text">Contact Information</p>
			<div className="form-content">
				<input
					type="text"
					id="email"
					className="custom-text"
					value={email}
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="text"
					id="phoneNumber"
					className="custom-text"
					value={phoneNumber}
					placeholder="Phone Number"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default ContactInfo;
