import React from "react";
import ContactInfo from "./contactInfo";
import PaymentCardInfo from "./paymentCardInfo";
import BillingInfo from "./billingInfo";

const PaymentContactInfo = () => {
	return (
		<>
			<div className="form-container">
				<form>
					<ContactInfo />
					<PaymentCardInfo />
					<BillingInfo />
					<button className="custom-text btn-large margin-top">
						Donate Now
					</button>
				</form>
			</div>
		</>
	);
};

export default PaymentContactInfo;
