import React from "react";

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function PaypalSuccessMessage() {
    return (
        <section id="paypal-success-container">
            <h4 className="paypal-success-title">
                THANK YOU FOR YOUR DONATION!
            </h4>
            <p className="paypal-success-desc">
                Your generous donation to SpaceLab is greatly
                appreciated. With your support, we can make a real
                difference in the lives of aspiring individuals,
                providing them with the economic support they need to
                explore new career paths in science and technology.
            </p>
        </section>
    );
}