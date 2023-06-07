import React, { useState } from "react";
import ToggleGroupButton from "./toggleGroupButton";
import RadioButtonGroup from "./radioButtonGroup";
import VerticalButtons from "./verticalButtons";
import CheckBox from "./checkBox";
import AccordionText from "./accordionText";
import STAR_ICON from "../../assets/small_star.svg";
import "./donatePaymentForm.scss";

const options = ["One Time", "Monthly"];
const amountOptions = [10, 25, 100, "Custom"];

const initData = {
	paymentFrequency: options[0],
	amount: 0,
	recoveryFee: false,
	description: "",
};

const DonatePaymentForm = () => {
	const [data, setData] = useState(initData);

	const handleChange = ({ name, value }) => {
		console.log(data, name, value);
		setData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// after submitting data to the backend
		// reset the data to the initial values
		setData(initData);
	};

	const { paymentFrequency, amount, recoveryFee, description } = data;

	return (
		<section id="donate-payment-wrapper">
			<div className="donate-payment-form">
				{/* Donate Header */}
				<div className="donate-payment-header">
					<h4 className="donate-title">HELP US MAKE AN IMPACT</h4>
					<p className="custom-text--large">
						Your donation funds outer-space projects for early
						career tech professionals with a focus on helping
						underrepresented groups.
					</p>
				</div>
				{/* Form contents */}
				<div className="donate-payment-content" type="submit">
					<ToggleGroupButton
						name="paymentFrequency"
						options={options}
						selected={paymentFrequency}
						handleChange={handleChange}
					/>
					<RadioButtonGroup
						name="amount"
						setAmount={handleChange}
						options={amountOptions}
					/>
					<CheckBox
						name="recoveryFee"
						checked={recoveryFee}
						setChecked={handleChange}
						amount={amount}
					/>
					<AccordionText
						name="description"
						handleChange={handleChange}
						description={description}
					/>
					<button
						className="custom-text btn-large"
						// onClick={handleSubmit}
					>
						<a
							href="https://www.paypal.com/donate/?hosted_button_id=PK9D4A3HEWV8C"
							target="_blank"
							rel="noreferrer"
							style={{ textDecoration: "none" }}
						>
							Donate with PayPal
						</a>
					</button>
					<VerticalButtons />
				</div>
				<img
					src={STAR_ICON}
					alt="star_icon"
					className="star1 star_icon"
				/>
				<img
					src={STAR_ICON}
					alt="star_icon"
					className="star2 star_icon"
				/>
				<img
					src={STAR_ICON}
					alt="star_icon"
					className="star3 star_icon"
				/>
			</div>
		</section>
	);
};

export default DonatePaymentForm;
