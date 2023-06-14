import React from "react";
import group_of_two_men from "../../assets/group_of_two_men.png";
import three_women_chatting from "../../assets/three_women_chatting.png";
import one_woman_talking_and_one_laughing from "../../assets/one_woman_talking_and_one_laughing.png";
import "./donatePaymentHeader.scss";

const DonatePaymentHeader = () => {
	return (
		<>
			<div className="donate-payment-header-container">
				<img
					src={group_of_two_men}
					alt="group-of-two-men"
					className="header-image-1"
				/>
				<img
					src={three_women_chatting}
					alt="three-women-chatting"
					className="header-image-2"
				/>
				<img
					src={one_woman_talking_and_one_laughing}
					alt="one-woman-talking-and-one-laughing"
					className="header-image-3"
				/>
			</div>
		</>
	);
};

export default DonatePaymentHeader;
