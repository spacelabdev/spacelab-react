import React, { useState, useEffect } from "react";
import {
	PayPalScriptProvider,
	usePayPalScriptReducer,
	PayPalButtons,
} from "@paypal/react-paypal-js";
import { useHistory } from "react-router-dom";
import "./paypalDonate.scss";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

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

/*Plan Id's from Paypal*/
const planIds = [
	{
		amount: 10,
		planId: "P-7XE10582DY6151643MS5LJCY",
	},
	{
		amount: 25,
		planId: "P-5E091476E6266123UMTPJLGI",
	},
	{
		amount: 100,
		planId: "P-93969204GM7400705MTPJL2A",
	},
];

const ButtonWrapper = ({ intent, showSpinner, formData }) => {
	const history = useHistory();
	const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
	const [planId, setPlanId] = useState(
		planIds.find((e) => e.amount === formData.amount)
	);

	useEffect(() => {
		dispatch({
			type: "resetOptions",
			value: {
				...options,
				currency: formData.currency,
				intent: intent,
			},
		});
	}, [intent, showSpinner]);

	useEffect(() => {
		setPlanId(planIds.find((e) => e.amount === formData.amount));
	}, [formData]);

	return (
		<>
			{showSpinner && isPending && (
				<LoadingSpinner showLoadingSpinner={true} />
			)}
			<PayPalButtons
				style={intent === "capture" ? oneTimeStyle : recurringStyle}
				disabled={false}
				forceReRender={[
					intent,
					formData.amount,
					formData.currency,
					oneTimeStyle,
				]}
				fundingSource={undefined}
				createOrder={
					intent === "capture"
						? (data, actions) => {
								return actions.order
									.create({
										purchase_units: [
											{
												amount: {
													currency_code:
														formData.currency,
													value: formData.amount,
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
					history.push("donate/success", intent);
				}}
				onError={function (err) {
					// window.location.href = "/donate/error";
				}}
			/>
		</>
	);
};

/**
 *
 * @param {currency} string
 * @param {amount} string
 * @param {planId} string
 * @returns {JSX.Element}
 * @constructor
 */
export default function PaypalDonate({ donationType, showForm, formData }) {
	console.log(formData);
	return (
		<div className="paypal-buttons-wrap">
			{/*Need to leave forms this way as options is hardcoded in PayPalScriptProvider*/}
			{showForm && donationType === "One Time Donation" && (
				<div className="paypal-buttons">
					<PayPalScriptProvider
						options={{
							clientId: clientId,
							components: "buttons",
							currency: formData.currency,
						}}
					>
						<ButtonWrapper
							intent={"capture"}
							showSpinner={true}
							formData={formData}
						/>
					</PayPalScriptProvider>
				</div>
			)}
			{showForm && donationType === "Recurring Donation" && (
				<div className="paypal-buttons">
					<PayPalScriptProvider
						options={{
							clientId: clientId,
							components: "buttons",
							currency: formData.currency,
							vault: true,
						}}
					>
						<ButtonWrapper
							intent={"subscription"}
							showSpinner={true}
							formData={formData}
						/>
					</PayPalScriptProvider>
				</div>
			)}
		</div>
	);
}
