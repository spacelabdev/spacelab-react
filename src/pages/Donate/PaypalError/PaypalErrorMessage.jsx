import React from "react";
import { Link } from "react-router-dom";

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function PaypalErrorMessage() {
    return (
        <section id="paypal-error-container">
            <h4 className="paypal-error-title">
                Payment Failed
            </h4>
            <p className="paypal-error-desc">
                Unfortunately an error has occured and your payment cannot 
                be processed at this time, please verify your payment details 
                or try again later.
            </p>
            <Link
                to={"/donate"}
                style={{ textDecoration: "none" }}
            >
                <button className="paypal-back-btn" component={Link}>
                    Back To Donations
                </button>
            </Link>
        </section>
    );
}