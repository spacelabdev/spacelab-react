import React, { useState } from "react";
import FormInput from "./FormInput";
import "./paymentCardInfo.scss";

const initData = {
	email: "",
	phoneNumber: "",
	selectCountry: "",
	cardNumber: "",
	expiration: "",
	securityCode: "",
	nameOnCard: "",
	streetAddress: "",
	addressNumber: "",
	city: "",
	stateLocation: "",
	zipCode: "",
};

const PaymentCardInfo = () => {
	const [input, setInput] = useState(initData);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setInput((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//after validating the data
		//submit the data to backend
		setInput(initData);
	};

	const {
		email,
		phoneNumber,
		selectCountry,
		cardNumber,
		expiration,
		securityCode,
		nameOnCard,
		streetAddress,
		addressNumber,
		city,
		stateLocation,
		zipCode,
	} = input;
	return (
		<>
			<div className="form-container">
				<form>
					<div className="form-sub-container">
						<p className="custom-text margin-top">
							Contact Information
						</p>
						<div className="form-content">
							<FormInput
								type="text"
								id="email"
								className="custom-text form-input"
								name="email"
								value={email}
								placeholder="Email"
								onChange={handleChange}
							/>
							<FormInput
								type="text"
								id="phoneNumber"
								className="custom-text form-input"
								name="phoneNumber"
								value={phoneNumber}
								placeholder="Phone Number"
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="form-sub-container">
						<p className="custom-text margin-top">
							Donate with a Debit of Credit Card
						</p>
						<div className="form-content">
							<FormInput
								type="text"
								id="selectCountry"
								className="custom-text"
								name="selectCountry"
								value={selectCountry}
								placeholder="Select your Country/Region"
								onChange={handleChange}
							/>
							<FormInput
								type="number"
								id="cardNumber"
								className="custom-text"
								name="cardNumber"
								value={cardNumber}
								placeholder="Card Number"
								onChange={handleChange}
							/>
							<div className="small-input">
								<FormInput
									type="text"
									id="expiration"
									className="custom-text"
									name="expiration"
									value={expiration}
									placeholder="Expires"
									onChange={handleChange}
								/>
								<FormInput
									type="number"
									id="securityCode"
									className="custom-text margin-right-0"
									name="securityCode"
									value={securityCode}
									placeholder="Security code"
									onChange={handleChange}
								/>
							</div>
							<FormInput
								type="text"
								id="nameOnCard"
								className="custom-text"
								placeholder="Name on card"
								name="nameOnCard"
								value={nameOnCard}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="form-sub-container">
						<p className="custom-text margin-top">
							Billing Address
						</p>
						<div className="form-content">
							<FormInput
								type="text"
								id="streetAddress"
								className="custom-text"
								name="streetAddress"
								value={streetAddress}
								placeholder="Street address"
								onChange={handleChange}
							/>
							<FormInput
								type="text"
								id="addressNumber"
								className="custom-text"
								name="addressNumber"
								value={addressNumber}
								placeholder="Apt.,ste.,bldg."
								onChange={handleChange}
							/>
							<div className="small-input">
								<FormInput
									type="text"
									id="city"
									className="custom-text"
									name="city"
									value={city}
									placeholder="City"
									onChange={handleChange}
								/>
								<FormInput
									type="text"
									id="stateLocation"
									className="custom-text"
									name="stateLocation"
									value={stateLocation}
									placeholder="State"
									onChange={handleChange}
								/>
							</div>
							<FormInput
								type="number"
								id="zipCode"
								className="custom-text"
								name="zipCode"
								value={zipCode}
								placeholder="Zip code"
								onChange={handleChange}
							/>
						</div>
					</div>
					<button
						className="custom-text btn-large margin-top"
						onClick={handleSubmit}
					>
						Donate Now
					</button>
				</form>
			</div>
		</>
	);
};

export default PaymentCardInfo;
