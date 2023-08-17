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

/*Inputs from the client that will need to be replaced with variable props from the parent component*/
const amount = "10";
const currency = "USD";
const planId = "P-4Y256783L52659318MS5NBKY";

const ButtonWrapper = ({ currency, intent, showSpinner }) => {
	const history = useHistory();
	const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

	useEffect(() => {
		dispatch({
			type: "resetOptions",
			value: {
				...options,
				currency: currency,
				intent: intent,
			},
		});
	}, [intent, currency, showSpinner]);

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
					history.push("donate/success", intent);
				}}
				onError={function (err) {
					window.location.href = "/donate/error";
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
			{showForm && donationType === "One Time Donation" && (
				<div className="paypal-buttons">
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
				</div>
			)}
			{showForm && donationType === "Recurring Donation" && (
				<div className="paypal-buttons">
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
				</div>
			)}
		</div>
	);
}
