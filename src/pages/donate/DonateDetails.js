import React from "react";
import "./donate.scss";

/**
 * Renders DonateDetails Page
 * @returns {JSX.Element}
 * @constructor
 */
export default function DonateDetails() {
	return (
		<>
			<section className="donate-section">
				<div className="donatation-content">
					<div className="frame-229">
						<div className="title">Title</div>
						<div className="spacelab-paragraph">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Ultricies id et vitae suspendisse purus.
							Venenatis cursus aliquam et commodo duis maecenas.
							Sed vulputate egestas vulputate donec nulla.
						</div>
						<div className="support-content">
							<ul>Your support will help us:
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                            </ul>
						</div>
                        <div className="payment-options">
                            <div className="frame-174">
                                <div className="frame-172">
                                    <div className="frame-170">
                                        <div className="frame-168">
                                            <div className="frame-169">
                                                <div className="step-1">1</div>
                                                <div className="amount-1">Amount</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			</section>
		</>
	);
}
