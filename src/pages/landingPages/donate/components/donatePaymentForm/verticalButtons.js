import { useState } from "react";
import PaymentCardInfo from "../cardPaymentInfo/PaymentCardInfo";
import ROCKET_ICON_IMAGE from "../../assets/icon _rocket.png";

const VerticalButtons = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState("");

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<>
			<button
				className="custom-text btn-large outline-btn"
				onClick={toggleDropdown}
			>
				Donate with Debit or Credit Card
			</button>
			{isDropdownOpen && <PaymentCardInfo />}
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
