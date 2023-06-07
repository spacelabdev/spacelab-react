import React from "react";
import group_of_two_men from "../../assets/group_of_two_men.png";
import three_women_chatting from "../../assets/three_women_chatting.png";
import one_woman_talking_and_one_laughing from "../../assets/one_woman_talking_and_one_laughing.png";
import "./donatePaymentHeader.scss";

const DonatePaymentHeader = () => {
	return (
		<>
			<div className="donate-payment-header-container">
				<img src={group_of_two_men} alt="group-of-two-men" />
				<img src={three_women_chatting} alt="three-women-chatting" />
				<img
					src={one_woman_talking_and_one_laughing}
					alt="one-woman-talking-and-one-laughing"
				/>
			</div>
		</>
	);
};

export default DonatePaymentHeader;
