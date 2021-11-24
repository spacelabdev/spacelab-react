import React from "react";
import "./memberCard.scss";

/**
 * Creates a member card that displays team member's image, name and title
 * @param props Array of Objects of team members
 * @returns {JSX.Element}
 * @constructor
 */
export default function MemberCard(props) {
		const { member } = props;
		return (
				<div className="member-card">
						<img src={member.image} alt={`${member.fullName}.png`}></img>
						<div className="member-card-text-container">
								<p className="member-card-text-name">{member.fullName}</p>
								<p className="member-card-text-title">{member.title}</p>
						</div>
				</div>
		);
}
