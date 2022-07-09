import React from "react";
import "./memberCard.scss";
import PropTypes from "prop-types";

/**
 * Renders a member card that displays team member's image, name and title
 * @returns {JSX.Element}
 * @constructor
 * @param memberObject {object}
 */
const MemberCard = (memberObject) => {
	const member = memberObject.member;

	return (
		<div className="member-card">
			<img src={member.image} alt={`${member.fullName}.png`}/>
			<div className="member-card-text-container">
				<p className="member-card-text-name">{member.fullName}</p>
				<p className="member-card-text-title">{member.title}</p>
			</div>
		</div>
	);
};

MemberCard.propTypes = {
	/**
	 * Object containing member details to be rendered
	 */
	memberObject: PropTypes.object,
};

MemberCard.defaultProps = {
	memberObject: {},
}

export default MemberCard;
