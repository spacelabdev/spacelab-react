import React from "react";
import { Link } from 'react-router-dom'
import ContactInfo from "./contactInfo";
import PaymentCardInfo from "./paymentCardInfo";
import BillingInfo from "./billingInfo";


const PaymentContactInfo = () => {
  return (
    <>
    <ContactInfo />
    <PaymentCardInfo />
    <BillingInfo />

    <div>
      <Link 
        to={{
          pathname:
          'http://www.paypal.com/donhttpsate/?hosted_button_id=PK9D4A3HEWV8C',
        }}
        target='_blank'
      >
      <button className="text-btn btn-large" component={Link}>
        Donate Now
      </button>
    </Link>
	</div>
    </>
  )
}

export default PaymentContactInfo