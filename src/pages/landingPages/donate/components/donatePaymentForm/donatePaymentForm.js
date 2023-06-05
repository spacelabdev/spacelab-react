import React, { useState } from "react";
import ToggleGroupButton from "./toggleGroupButton";
import RadioButtonGroup from "./radioButtonGroup";
import VerticalButtons from "./verticalButtons";
import CheckBox from "./checkBox";
import "./donatePaymentForm.scss";
import AccordionText from "./accordionText";
import PaymentContactInfo from "../paymentContactInfo/paymentContactInfo";

const DonatePaymentForm = () => {
	const [paymentFrequency, setFrequency] = useState("One Time");
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState(0);
	const [recoveryFee, setRecoveryFee] = useState(false);

	return (
		<section id="donate-payment-wrapper">
			<div className="donate-payment-form">
				{/* Donate Header */}
				<div className="donate-payment-header">
					<h4 className="donate-title">HELP US MAKE AN IMPACT</h4>
					<p>
						Your donation funds outer-space projects for early
						career tech professionals with a focus on helping
						underrepresented groups.
					</p>
				</div>
				{/* Form contents */}
				<div className="donate-payment-content">
					<ToggleGroupButton
						selected={paymentFrequency}
						setFrequency={setFrequency}
					/>
					<RadioButtonGroup setAmount={setAmount} />
					<CheckBox
						checked={recoveryFee}
						setChecked={setRecoveryFee}
					/>
					<AccordionText
						description={description}
						setDescription={setDescription}
					/>
					<VerticalButtons />
				</div>
			</div>
		</section>
	);
};

export default DonatePaymentForm;
