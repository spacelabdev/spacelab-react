import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import STAR_ICON from "../../../assets/donateAssets/small_star.svg"
import ROCKET_ICON_IMAGE from "../../../assets/donateAssets/icon _rocket.png"
import {
	PayPalScriptProvider,
	usePayPalScriptReducer,
	PayPalButtons,
} from "@paypal/react-paypal-js";
import "./donatePaymentForm.scss";

/*NOTE: THIS IS HOOKED UP TO A SANDBOX RIGHT NOW. TO USE LIVE, CHANGE THE CLIENT ID TO THE LIVE CLIENT ID*/

/*Paypal API Parameters*/
const clientId =
	"AYXrmDQruSv927DeXRGqKjik-aIZNvbB3DUizSd62SuHS6bUc_Enk1WEVwFe2y0EGegUG0lYbY1imHHc";
const oneTimeStyle = { layout: "vertical", color: "black", label: "paypal" };
const recurringStyle = {
	layout: "vertical",
	color: "black",
	label: "subscribe",
};

/*Inputs from the client that will need to be replaced with variable props from the parent component*/
const amount = "10";
const currency = "USD";
const planId = "P-4Y256783L52659318MS5NBKY";

const ButtonWrapper = ({ currency, intent, showSpinner }) => {
	const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

	useEffect(() => {
		dispatch((state) => ({
			...state,
			options: {
				...state.options,
				currency: currency,
				intent: intent,
			},
		}));
	}, [intent, currency, dispatch, options]);

	return (
		<>
			{showSpinner && isPending && (
				<LoadingSpinner showLoadingSpinner={true} />
			)}

			<PayPalButtons
				style={intent === "capture" ? oneTimeStyle : recurringStyle}
				disabled={false}
				forceReRender={[intent, amount, currency, oneTimeStyle]}
				fundingSource={undefined}
				createOrder={
					intent === "capture"
						? (data, actions) => {
							return actions.order
								.create({
									purchase_units: [
										{
											amount: {
												currency_code: currency,
												value: amount,
											},
										},
									],
								})
								.then((orderId) => {
									return orderId;
								});
						}
						: undefined
				}
				createSubscription={
					intent === "subscription"
						? (data, actions) => {
							return actions.subscription
								.create({
									plan_id: planId,
								})
								.then((orderId) => {
									return orderId;
								});
						}
						: undefined
				}
				onApprove={function (data, actions) {
					/*TODO: Add redirect to Thank you component*/
					alert("Thank you for your donation!");
				}}
				onError={function (err) {
					/*TODO: Add redirect to Error component*/
					alert(
						"There was an error processing your donation. Please try again later."
					);
					return err;
				}}
			/>
		</>
	);
};

const options = ["One Time", "Monthly"];
const amountOptions = [10, 25, 100];
const amountOptions2 = [10, 25, 100, "Custom"];

const initData = {
	paymentFrequency: options[0],
	amount: 0,
	recoveryFee: false,
	description: "",
};

// Donation Type Toggle
const ToggleGroup = ({ selected, handleChange, options, name, setForm }) => {
	return (
		<>
			{options.map((option) => (
				<button
					className={`text-caption-tab custom-text ${selected === option ? "active" : ""
						}`}
					type="button"
					role="tab"
					name={name}
					key={option}
					onClick={(e) => {
						handleChange({ name, value: option });
						if (option === "One Time") {
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
					value
				) : (
					<>
						${value}
						<span className="radio-input-span">USD</span>
					</>
				)}
			</label>
		</>
	);
};

const RadioButtonGroup = ({ setAmount, name, amountOptions, amountOptions2, dType }) => {
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
				{dType === "One Time" ? (
					amountOptions2.map((val, index) => (
						< RadioCard
							key={index}
							value={val}
							handleChange={handleChange}
							checked={val + "" === selected}
						/>
					))
				) : (
					amountOptions.map((val, index) => (
						<RadioCard
							key={index}
							value={val}
							handleChange={handleChange}
							checked={val + "" === selected}
						/>
					))
				)}
			</div>
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
		</>
	);
};

const DonatePaymentForm = () => {
	const [data, setData] = useState(initData);
	const [showForm, setShowForm] = useState(false);
	const [donationType, setDonationType] = useState();

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
						setForm={setForm}
					/>
					<RadioButtonGroup
						name="amount"
						setAmount={handleChange}
						amountOptions={amountOptions}
						amountOptions2={amountOptions2}
						dType={data.paymentFrequency}
					/>
					{showForm && <span>{donationType}</span>}
					{/*Need to leave forms this way as options is hardcoded in PayPalScriptProvider*/}
					{showForm && donationType === "One Time Donation" && (
						<PayPalScriptProvider
							options={{
								clientId: clientId,
								components: "buttons",
								currency: currency,
							}}
						>
							<ButtonWrapper
								currency={currency}
								intent={"capture"}
								showSpinner={true}
							/>
						</PayPalScriptProvider>
					)}
					{showForm && donationType === "Recurring Donation" && (
						<PayPalScriptProvider
							options={{
								clientId: clientId,
								components: "buttons",
								currency: currency,
								vault: true,
							}}
						>
							<ButtonWrapper
								currency={currency}
								intent={"subscription"}
								showSpinner={true}
							/>
						</PayPalScriptProvider>
					)}
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
