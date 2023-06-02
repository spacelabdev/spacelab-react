import React, { useState } from "react";
import "./radioButton.scss";
import { Link } from "react-router-dom";

const RadioButtonGroup = () => {
	const [amount, setAmount] = useState(10);
	const [input, setInput] = useState("");

	const handleChange = (e) => {
		const { value } = e.target;
		setAmount(value);

		value === "custom"
			? setInput("Enter custom amount")
			: setInput(`$ ${value}`);
	};

	const handleCheckboxClick = (e) => {
		console.log("Check box is checkde");
	};

	return (
		<section id="donate-payment-wrapper">
			<div className="donate-payment-form">
				{/* Donate Header */}
				<div class="donate-payment-header">
					<h4 className="donate-title">HELP US MAKE AN IMPACT</h4>
					<p>
						Your donation funds outer-space projects for early
						career tech professionals with a focus on helping
						underrepresented groups.
					</p>
				</div>
				{/* radio btn */}
				<div className="preset-amount-wrapper">
					<input
						type="radio"
						name="preset-amounts"
						id="selection_preset-amounts_10"
						className="radio-btn-input"
						value="10"
						onChange={handleChange}
					/>
					<label
						className="radio-input-label"
						htmlFor="selection_preset-amounts_10"
					>
						$10
						<span className="radio-input-span">USD</span>
					</label>
					<input
						type="radio"
						name="preset-amounts"
						id="selection_preset-amounts_25"
						className="radio-btn-input"
						value="25"
						onChange={handleChange}
					/>
					<label
						className="radio-input-label"
						htmlFor="selection_preset-amounts_25"
					>
						$25
						<span className="radio-input-span">USD</span>
					</label>
					<input
						type="radio"
						name="preset-amounts"
						id="selection_preset-amounts_100"
						className="radio-btn-input"
						value="100"
						onChange={handleChange}
					/>
					<label
						className="radio-input-label"
						htmlFor="selection_preset-amounts_100"
					>
						$100
						<span className="radio-input-span">USD</span>
					</label>
					<input
						type="radio"
						name="preset-amounts"
						id="selection_preset-amounts_Other"
						className="radio-btn-input"
						value="custom"
						onChange={handleChange}
					/>
					<label
						className="radio-input-label"
						htmlFor="selection_preset-amounts_Other"
					>
						Custom
					</label>
				</div>
				{/* CUSTOM INPUT FIELD */}
				<input
					value={input}
					disabled={amount !== "custom"}
					className="custom-input-field"
					placeholder="$ Donation amount"
					onChange={(e) => setInput(e.target.value)}
				/>
				{/* Checkbox */}
				<div className={"donate-checkbox-wrapper"}>
					<input
						type={"checkbox"}
						className="donate-checkbox"
						name="cover-fee"
						checked={false}
						onChange={handleCheckboxClick}
					/>
					<label className="cover-fee">
						Add <span className="cover-fee-bold">$0.00 USD</span> to
						help cover the fees.
					</label>
				</div>
				{/* Bottom Buttons */}
				<div className="btn-container">
					<Link
						to={"/campaigns/donate/donate-payment"}
						style={{ textDecoration: "none" }}
					>
						<button
							className="text-btn btn-large"
							component={Link}
							to={"/campaigns/donate/donate-payment"}
						>
							Donate with PayPal
						</button>
					</Link>
				</div>
				<Link
					to={"/campaigns/donate/donate-payment"}
					style={{ textDecoration: "none" }}
				>
					<button
						className="text-btn btn-large outline-btn"
						component={Link}
						to={"/campaigns/donate/donate-payment"}
					>
						Donate with Debit or Credit Card
					</button>
				</Link>
			</div>
		</section>
	);
};

export default RadioButtonGroup;
