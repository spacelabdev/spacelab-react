import React, { useState } from "react";
import STAR_ICON from "../../../assets/donateAssets/small_star.svg";
import ROCKET_ICON_IMAGE from "../../../assets/donateAssets/icon _rocket.png";
import "./donatePaymentForm.scss";
import PaypalDonate from "../../../components/PaypalDonate/PaypalDonate";

const options = ["One Time", "Monthly"];
const amountOptions = [10, 25, 100];
const amountOptions2 = [10, 25, 100, "Custom"];

// Donation Type Toggle
const ToggleGroup = ({ selected, handleChange, options, name, setForm }) => {
	return (
		<>
			{options.map((option) => (
				<button
					className={`text-caption-tab custom-text ${
						selected === option ? "active" : ""
					}`}
					type="button"
					role="tab"
					name={name}
					key={option}
					onClick={(e) => {
						handleChange({ name, value: option });
						if (option === `One Time`) {
							setForm("One Time Donation");
						}
						if (option === "Monthly") {
							setForm("Recurring Donation");
						}
					}}
				>
					{option}
				</button>
			))}
		</>
	);
};

const ToggleGroupButton = (props) => {
	return (
		<div className="tab-group-container">
			<div className="tab-group">
				<ToggleGroup {...props} />
			</div>
		</div>
	);
};

// Payment Amount Options
const RadioCard = ({ value, handleChange, checked }) => {
	return (
		<>
			<input
				type="radio"
				id={`selection_preset-amounts_${value}`}
				className="radio-btn-input"
				value={value}
				onChange={(e) => handleChange(e.target.value)}
				checked={checked}
			/>
			<label
				className="radio-input-label custom-text"
				htmlFor={`selection_preset-amounts_${value}`}
			>
				{value === "Custom" ? (
					<>
						<span className="radio-input-span">{value}</span>
					</>
				) : (
					<>
						<span className="radio-input-span">{`$${value}`}</span>
					</>
				)}
			</label>
		</>
	);
};

const RadioButtonGroup = ({
	setAmount,
	name,
	amountOptions,
	amountOptions2,
	dType,
}) => {
	const [selected, setSelected] = useState("");
	const [inputVal, setInputVal] = useState("");

	const handleChange = (value) => {
		setSelected(value);

		value === "Custom" ? setInputVal("") : setInputVal(`$ ${value}`);
		value !== "Custom" && setAmount({ name, value: +value });
	};

	const handleInputChange = (e) => {
		const { value } = e.target;
		value.includes("$") ? setInputVal(value) : setInputVal(`$ ${value}`);
		setAmount({
			name,
			value: +value.slice(2),
		});
	};

	return (
		<>
			<div className="preset-amount-wrapper">
				{dType === "One Time"
					? amountOptions2.map((val, index) => (
							<RadioCard
								key={index}
								value={val}
								handleChange={handleChange}
								checked={val + "" === selected}
							/>
					  ))
					: amountOptions.map((val, index) => (
							<RadioCard
								key={index}
								value={val}
								handleChange={handleChange}
								checked={val + "" === selected}
							/>
					  ))}
			</div>
			{dType === "One Time" && (
				<div className="input-container">
					<input
						value={inputVal}
						className="custom-text"
						disabled={selected !== "Custom"}
						onChange={handleInputChange}
						placeholder={
							selected !== "Custom"
								? "$ Donation amount"
								: "Enter custom amount"
						}
					/>
				</div>
			)}
		</>
	);
};

const DonatePaymentForm = () => {
	const initData = {
		paymentFrequency: options[0],
		amount: 10,
		currency: "USD",
	};
	const [data, setData] = useState(initData);
	const [showForm, setShowForm] = useState(true);
	const [donationType, setDonationType] = useState("One Time Donation");

	const setForm = (dType) => {
		if (showForm && donationType === dType) {
			setShowForm(false);
		} else {
			setShowForm(true);
			setDonationType(dType);
		}
	};

	const handleChange = ({ name, value }) => {
		setData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const { paymentFrequency } = data;

	return (
		<section id="donate-page-payment-wrapper">
			<div className="donate-payment-form">
				{/* Donate Header */}
				<div>
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
						setForm={setForm}
					/>
					<RadioButtonGroup
						name="amount"
						setAmount={handleChange}
						amountOptions={amountOptions}
						amountOptions2={amountOptions2}
						dType={data.paymentFrequency}
					/>
					<PaypalDonate
						donationType={donationType}
						showForm={showForm}
						formData={data}
					/>
					<div className="icon-container">
						<img
							src={ROCKET_ICON_IMAGE}
							alt={"rocket ship icon"}
							className="rocket-ship-icon"
						/>
					</div>
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
