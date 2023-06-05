import { Link } from "react-router-dom";
import { useState } from 'react'
import PaymentContactInfo from "../paymentContactInfo/paymentContactInfo";
import { ToggleButton } from "react-bootstrap";

const VerticalButtons = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState('')

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen)
	}

	return (
		<>
			<div className="btn-container">
				<Link
					to={{
						pathname:
							"http://www.paypal.com/donhttpsate/?hosted_button_id=PK9D4A3HEWV8C",
					}}
					target="_blank"
				>
					<button className="text-btn btn-large" component={Link}>
						Donate with PayPal
					</button>
				</Link>
			</div>
				<button
					className="text-btn btn-large outline-btn"
					onClick={toggleDropdown}
				>
					Donate with Debit or Credit Card
				</button>
				{isDropdownOpen && <PaymentContactInfo />}
			
		</>
	);
};

export default VerticalButtons;
