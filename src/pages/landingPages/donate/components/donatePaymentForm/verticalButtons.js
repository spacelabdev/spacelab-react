import { useState } from "react";
import { Link } from "react-router-dom";
import PaymentContactInfo from "../cardPaymentInfo/paymentContactInfo";
import ROCKET_ICON_IMAGE from "../../assets/icon _rocket.png";

const VerticalButtons = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState("");

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<>
			<div className="btn-container">
				<button className="custom-text btn-large" component={Link}>
					<Link
						to={{
							pathname:
								"http://www.paypal.com/donhttpsate/?hosted_button_id=PK9D4A3HEWV8C",
						}}
						target="_blank"
					>
						Donate with PayPal
					</Link>
				</button>
			</div>
			<button
				className="custom-text btn-large outline-btn"
				onClick={toggleDropdown}
			>
				Donate with Debit or Credit Card
			</button>
			{isDropdownOpen && <PaymentContactInfo />}
			<div className="icon-container">
				<img
					src={ROCKET_ICON_IMAGE}
					alt={"rocket ship icon"}
					className="rocket-ship-icon"
				/>
			</div>
		</>
	);
};

export default VerticalButtons;
