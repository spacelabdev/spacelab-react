import { Link } from "react-router-dom";

const VerticalButtons = () => {
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
			<Link
				to={"/campaigns/donate/donate-payment"}
				style={{ textDecoration: "none" }}
			>
				<button
					className="text-btn btn-large outline-btn"
					component={Link}
				>
					Donate with Debit or Credit Card
				</button>
			</Link>
		</>
	);
};

export default VerticalButtons;
