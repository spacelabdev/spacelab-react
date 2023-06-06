import React, { useState } from "react";

const BillingInfo = () => {
	const [streetAddress, setStreetAddress] = useState("");
	const [addressNumber, setAddressNumber] = useState("");
	const [city, setCity] = useState("");
	const [stateLocation, setStateLocation] = useState("");
	const [zipCode, setZipCode] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		setStreetAddress("");
		setAddressNumber("");
		setCity("");
		setStateLocation("");
		setZipCode("");
	};

	return (
		<div className="form-sub-container">
			<p className="custom-text mt-1">Billing Address</p>
			<div className="form-content">
				<input
					type="text"
					id="streetAddress"
					className="custom-text"
					value={streetAddress}
					placeholder="Street address"
					onChange={(e) => setStreetAddress(e.target.value)}
				/>
				<input
					type="text"
					id="addressNumber"
					className="custom-text"
					value={addressNumber}
					placeholder="Apt.,ste.,bldg."
					onChange={(e) => setAddressNumber(e.target.value)}
				/>
				<div className="small-input">
					<input
						type="text"
						id="city"
						className="custom-text"
						value={city}
						placeholder="City"
						onChange={(e) => setCity(e.target.value)}
					/>
					<input
						type="text"
						id="stateLocation"
						className="custom-text"
						value={stateLocation}
						placeholder="State"
						onChange={(e) => setStateLocation(e.target.value)}
					/>
				</div>
				<input
					type="text"
					id="zipCode"
					className="custom-text"
					value={zipCode}
					placeholder="Zip code"
					onChange={(e) => setZipCode(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default BillingInfo;
