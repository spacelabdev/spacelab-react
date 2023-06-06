import React, { useState } from "react";

const PaymentCardInfo = () => {
	const [selectCountry, setSelectCountry] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [expiration, setExpiration] = useState("");
	const [securityCode, setSecurityCode] = useState("");
	const [nameOnCard, setNameOnCard] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		setSelectCountry("");
		setCardNumber("");
		setExpiration("");
		setSecurityCode("");
		setNameOnCard("");
	};

	return (
		<div className="form-sub-container">
			<p className="custom-text">Donate with a Debit of Credit Card</p>
			<div className="form-content">
				<input
					type="text"
					id="selectCountry"
					className="custom-text"
					value={selectCountry}
					placeholder="Select your Country/Region"
					onChange={(e) => setSelectCountry(e.target.value)}
				/>
				<input
					type="text"
					id="cardNumber"
					className="custom-text"
					value={cardNumber}
					placeholder="Card Number"
					onChange={(e) => setCardNumber(e.target.value)}
				/>
				<div className="small-input">
					<input
						type="text"
						id="expiration"
						className="custom-text"
						value={expiration}
						placeholder="Expires"
						onChange={(e) => setExpiration(e.target.value)}
					/>
					<input
						type="text"
						id="securityCode"
						className="custom-text margin-right-0"
						value={securityCode}
						placeholder="Security code"
						onChange={(e) => setSecurityCode(e.target.value)}
					/>
				</div>
				<input
					type="text"
					id="nameOnCard"
					className="custom-text"
					placeholder="Name on card"
					value={nameOnCard}
					onChange={(e) => setNameOnCard(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default PaymentCardInfo;
