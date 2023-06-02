import React, { useState } from "react";

const PaymentForm = () => {
	const [cardNumber, setCardNumber] = useState("");
	const [cardHolder, setCardHolder] = useState("");
	const [expiryDate, setExpiryDate] = useState("");
	const [cvv, setCvv] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// Perform validation and submit the payment data
		const paymentData = {
			cardNumber,
			cardHolder,
			expiryDate,
			cvv,
		};

		// Reset the form
		setCardNumber("");
		setCardHolder("");
		setExpiryDate("");
		setCvv("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="cardNumber">Card Number</label>
				<input
					type="text"
					id="cardNumber"
					value={cardNumber}
					onChange={(e) => setCardNumber(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="cardHolder">Card Holder</label>
				<input
					type="text"
					id="cardHolder"
					value={cardHolder}
					onChange={(e) => setCardHolder(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="expiryDate">Expiry Date</label>
				<input
					type="text"
					id="expiryDate"
					value={expiryDate}
					onChange={(e) => setExpiryDate(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="cvv">CVV</label>
				<input
					type="text"
					id="cvv"
					value={cvv}
					onChange={(e) => setCvv(e.target.value)}
				/>
			</div>
			<button type="submit">Submit Payment</button>
		</form>
	);
};

export default PaymentForm;
